import React, { useState } from "react";
import Todo from "../todo/Todo";

import { DragDropContext } from "react-beautiful-dnd";

import initialData from "../../data/data";

const Dashboard = () => {
  const [starterData, setStarterData] = useState(initialData);
  const [searchTerm, setSearchTerm] = useState("");

  const addTask = (task, colId) => {
    const newTasks = { ...starterData.tasks, [task.id]: task };
    const newTaskIds = [...starterData.columns[colId].taskIds, task.id];

    setStarterData({
      ...starterData,
      tasks: newTasks,
      columns: {
        ...starterData.columns,
        [colId]: {
          ...starterData.columns[colId],
          taskIds: newTaskIds,
        },
      },
    });
  };

  const editTask = (taskId, newTask) => {
    Object.entries(newTask).forEach((update) => {
      const key = update[0];
      const value = update[1];
      const newTasks = { ...starterData };
      newTasks.tasks[taskId] = {
        ...newTasks.tasks[taskId],
        [key]: value,
      };
      setStarterData(newTasks);
    });
  };

  const deleteTask = (taskId, colId) => {
    const newTasks = { ...starterData.tasks };
    delete newTasks[taskId];
    const newTaskIds = [...starterData.columns[colId].taskIds];
    const filteredTasks = newTaskIds.filter((id) => id !== taskId);
    const newStarterData = {
      ...starterData,
      tasks: newTasks,
      columns: {
        ...starterData.columns,
        [colId]: {
          ...starterData.columns[colId],
          taskIds: filteredTasks,
        },
      },
    };
    setStarterData(newStarterData);
  };

  const searchTask = (val) => {    
    const tasks = { ...starterData.tasks };
    const colTaskIds = [ ...starterData.columns['column-1'].taskIds ];
    const filteredTask = Object.entries(tasks)
      .filter(([key, value]) => {
        
        return !value.isDone && value.title
          .toLowerCase()
          .includes(val.toLocaleLowerCase());
      })
      .map(task => task[0]);
   
    setStarterData({
      ...starterData,
      columns: {
        ...starterData.columns,
        ['column-1']: {
          ...starterData.columns['column-1'],
          taskIds: filteredTask
        }
      }
    });
  };

  const handleDragEnd = ({ destination, source, draggableId }) => {
    if (!destination) return;
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }
    // Search column through startderData
    const start = starterData.columns[source.droppableId];
    const end = starterData.columns[destination.droppableId];

    

    if (start === end) {
      const taskIds = [...start.taskIds];
      const removed = taskIds.splice(source.index, 1);
      taskIds.splice(destination.index, 0, removed[0]);

      const newColOrder = {
        ...start,
        taskIds,
      };

      setStarterData({
        ...starterData,
        columns: {
          ...starterData.columns,
          [start.id]: newColOrder,
        },
      });
      return; // return after action
    }

    const startColTaskIds = [...start.taskIds];
    const endColTaskIds = [...end.taskIds];
    const removed = startColTaskIds.splice(source.index, 1);

    starterData.tasks[draggableId].isDone = !starterData.tasks[draggableId].isDone;
    
    endColTaskIds.splice(destination.index, 0, removed[0]);
    
    const newStarterCol = {
      ...start,
      taskIds: startColTaskIds,
    };

    const newEndCol = {
      ...end,
      taskIds: endColTaskIds,
    };

    setStarterData({
      ...starterData,
      columns: {
        [start.id]: newStarterCol,
        [end.id]: newEndCol,
      },
    });
  };

  return (
    <div className="container">
      <h3 className="text-center">Tasks Dashboard</h3>
      <div className="row gy-3 justify-content-around mt-5">
        <DragDropContext onDragEnd={handleDragEnd}>
          {
            // Render all task from column in order
            starterData.columnOrder.map((colId) => {
              const column = starterData.columns[colId];

              const colTasks = column.taskIds.map(
                (taskId) => starterData.tasks[taskId]
              );
              return (
                <Todo
                  key={column.id}
                  id={column.id}
                  title={column.title}
                  onEditTask={editTask}
                  onAddTask={addTask}
                  onDeleteTask={deleteTask}
                  onSearchTask={searchTask}
                  tasks={colTasks}
                  classes={"col-10 col-md-5 col-lg-5"}
                />
              );
            })
          }
        </DragDropContext>
      </div>
    </div>
  );
};

export default Dashboard;
