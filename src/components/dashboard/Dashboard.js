import React, { useState } from "react";
import Todo from "../todo/Todo";
import Done from "../done/Done";
import { v4 as uuidv4 } from "uuid";
import { DragDropContext } from "react-beautiful-dnd";

const Dashboard = () => {
  const currentTask = [
    {
      id: uuidv4(),
      title: "walk the dog",
      description: "At the park. Bring snacks!",
      isDone: false,
    },
    {
      id: uuidv4(),
      title: "Bring gift for Abby",
      description: "At her dad store. She likes gems or dandallion",
      isDone: true,
    },
    {
      id: uuidv4(),
      title: "give leek to George",
      description: "At his house. He will be watching TV",
      isDone: false,
    },
  ];

  const [tasks, setTasks] = useState(currentTask);

  const addTask = (newTask) => {
    newTask.id = uuidv4();
    console.log(newTask);

    setTasks([...tasks, newTask]);
    console.log(tasks);
  };

  const editTask = (taskId, task) => {
    const index = tasks.findIndex((task) => taskId === task.id);
    const newArr = [...tasks];
    const keysUpdate = Object.keys(task);
    keysUpdate.map((key) => (newArr[index][key] = task[key]));
    setTasks(newArr);
  };

  const deleteTask = (taskId) => {
    const filteredTasks = tasks.filter((task) => taskId !== task.id);
    setTasks(filteredTasks);
  };

  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const start = result.source.droppableId;
    const end = result.destination.droppableId;
    const currentDraggableTask = result.draggableId;
    // Get the current draggable task
    // Check the id of the current to the current task and filter it
    // Add the current draggable task to the new droppable column
    // Set the task to isDone is true
    
    if (start === end) {
      const newTasksOrder = [...tasks];
      const [reorderedItem] = newTasksOrder.splice(result.source.index, 1);
      newTasksOrder.splice(result.destination.index, 0, reorderedItem);
      setTasks(newTasksOrder);
    }
    const newTasks = tasks.find((task) => task.id === currentDraggableTask);
    newTasks.isDone = !newTasks.isDone;
    console.log(start === end, newTasks);
  };

  return (
    <div className="container">
      <h3 className="text-center">Tasks Dashboard</h3>
      <div className="row gy-3 justify-content-around mt-5">
        <DragDropContext onDragEnd={handleDragEnd}>
          <Todo
            id="todoCol"
            onEditTask={editTask}
            onAddTask={addTask}
            onDeleteTask={deleteTask}
            tasks={tasks.filter((task) => !task.isDone)}
            classes={"col-10 col-md-5 col-lg-5"}
          />
          <Done
            id="doneCol"
            tasks={tasks.filter((task) => task.isDone)}
            classes={"col-10 col-md-5 col-lg-5"}
            onDeleteTask={deleteTask}
          />
        </DragDropContext>
      </div>
    </div>
  );
};

export default Dashboard;
