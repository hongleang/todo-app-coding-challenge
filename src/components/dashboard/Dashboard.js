import React, { useState } from "react";
import initialData from "../../data/data";

import List from "../list/List";
import { DragDropContext } from "react-beautiful-dnd";

const Dashboard = () => {
  const [starterData, setStarterData] = useState(initialData);

  const addTask = (task, colId) => {
    setStarterData((prevData) => {
      const newTasks = { ...starterData.tasks, [task.id]: task };
      const newTaskIds = [...starterData.columns[colId].taskIds, task.id];
      const newData = { ...prevData };
      newData.tasks = newTasks;
      newData.columns[colId] = {
        ...newData.columns[colId],
        taskIds: newTaskIds,
      };
      return newData;
    });
  };

  const editTask = (taskId, newTask) => {
    Object.entries(newTask).forEach((update) => {
      const key = update[0];
      const value = update[1];
      setStarterData((prevData) => {
        const newData = { ...prevData };
        newData.tasks[taskId] = {
          ...newData.tasks[taskId],
          [key]: value,
        };
        return newData;
      });
    });
  };

  const deleteTask = (taskId, colId) => {
    setStarterData((prevData) => {
      const newData = { ...prevData };
      delete newData.tasks[taskId];

      const newTaskIds = [newData.columns[colId].taskIds];
      const filteredTasks = newTaskIds.filter((id) => id !== taskId);

      newData.columns[colId] = {
        ...starterData.columns[colId],
        taskIds: filteredTasks,
      };
      return newData;
    });
  };

  const searchTask = (val) => {
    setStarterData((prevData) => {
      const newData = { ...prevData };
      const filteredTaskId = Object.entries(newData.tasks)
        .filter(([key, value]) => {
          return (
            !value.isDone &&
            value.title.toLowerCase().includes(val.toLocaleLowerCase())
          );
        })
        .map((task) => task[0]);

      newData.columns["column-1"] = {
        ...starterData.columns["column-1"],
        taskIds: filteredTaskId,
      };

      return newData;
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

      setStarterData((prevData) => {
        const newData = { ...prevData };
        newData.columns[start.id].taskIds = taskIds;
        return newData;
      });

      return; // Exit the function
    }

    const startColTaskIds = [...start.taskIds];
    const endColTaskIds = [...end.taskIds];
    const removed = startColTaskIds.splice(source.index, 1);

    // Toggle task status
    starterData.tasks[draggableId].isDone =
      !starterData.tasks[draggableId].isDone;

    // Insert removed item from start col to end col
    endColTaskIds.splice(destination.index, 0, removed[0]);

    setStarterData((prevData) => {
      const newData = {...prevData};
      newData.columns[start.id].taskIds = startColTaskIds;
      newData.columns[end.id].taskIds = endColTaskIds;

      return newData;
    })
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
                <List
                  key={column.id}
                  id={column.id}
                  name={column.title}
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
