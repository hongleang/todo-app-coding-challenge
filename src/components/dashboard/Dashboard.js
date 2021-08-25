import React, { useState } from "react";
import Todo from "../todo/Todo";
import Done from "../done/Done";

import { DragDropContext } from "react-beautiful-dnd";

import initialData from "../../data/data";

const Dashboard = () => {
  const [starterData, setStarterData] = useState(initialData);

  const addTask = (task) => {
    const newTasks = {...starterData.tasks, [task.id]: task};
    const newTaskIds = [...starterData.columns["column-1"].taskIds, task.id];
    
    setStarterData({
      ...starterData, 
      tasks: newTasks,
      columns: {
        ...starterData.columns,
        "column-1": {
          ...starterData.columns["column-1"],
          taskIds: newTaskIds
        }
      }
    });
  };

  const editTask = (taskId, task) => {
    //
  };

  const deleteTask = (taskId) => {
    // Find the taskId
    // Match the taskId with staterData
    // Filtering the the tasks
    // Find out which column the task is in
    // Filtering the column taskId
    
  };

  const handleDragEnd = ({ destination, source, draggableId, type }) => {
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
      
      // debugger
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
          [start.id]: newColOrder
        },
      });
      console.log(starterData.columns)
      return; // return after action
    } 

    const startColTaskIds = [...start.taskIds];
    const endColTaskIds = [...end.taskIds];
    const removed = startColTaskIds.splice(source.index, 1);
    endColTaskIds.splice(destination.index, 0, removed[0]);

    const newStarterCol = {
      ...start,
      taskIds: startColTaskIds
    };

    const newEndCol = {
      ...end,
      taskIds: endColTaskIds
    };

    setStarterData({
      ...starterData,
      columns: {
        [start.id]: newStarterCol,
        [end.id]: newEndCol
      }
    });
  };

  return (
    <div className="container">
      <h3 className="text-center">Tasks Dashboard</h3>
      <div className="row gy-3 justify-content-around mt-5">
        <DragDropContext onDragEnd={handleDragEnd}>
          {
            // Render all task from column in order
            starterData.columnOrder.map((colId, index) => {
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
