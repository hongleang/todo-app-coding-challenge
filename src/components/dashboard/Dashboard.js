import React, { useState, useEffect} from "react";
import Todo from "../todo/Todo";
import Done from "../done/Done";
import { v4 as uuidv4 } from "uuid";

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
      isDone: false,
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
    newTask.isDone = false;
    console.log(newTask);

    setTasks([...tasks, newTask]);
    console.log(tasks);
  };

  const editTask = (taskId, task) => {
    const index = tasks.findIndex(task => taskId === task.id);
    const newArr = [...tasks];
    const keysUpdate = Object.keys(task);
    keysUpdate.map(key => newArr[index][key] = task[key]);    
    setTasks(newArr);
  };

  const deleteTask = (taskId) => {
    const filteredTasks = tasks.filter((task) => taskId !== task.id);
    setTasks(filteredTasks);
  };

  return (
    <div className="container">
      <h3 className="text-center">Tasks Dashboard</h3>
      <div className="row gy-3 justify-content-around mt-5">
        <Todo
          onEditTask={editTask}
          onAddTask={addTask}
          onDeleteTask={deleteTask}
          tasks={tasks}
          classes={"col-10 col-md-5 col-lg-5"}
        />
        <Done tasks={tasks} classes={"col-10 col-md-5 col-lg-5"} />
      </div>
    </div>
  );
};

export default Dashboard;
