import React, { useState } from 'react';
import Todo from '../todo/Todo';
import Done from '../done/Done';

const Dashboard = () => {

  const currentTask = [
    {
      'id': 1,
      'title': 'walk the dog',
      'description': 'At the park. Bring snacks!',
      'isDone': false
    },
    {
      'id': 2,
      'title': 'Bring gift for Abby',
      'description': 'At her dad store. She likes gems or dandallion',
      'isDone': false
    },
    {
      'id': 3,
      'title': 'give leek to George',
      'description': 'At his house. He will be watching TV',
      'isDone': false
    },
  ];

  const [tasks, setTasks] = useState(currentTask);

  const addTask = (newTask) => {
    newTask.id = tasks.length;
    
    newTask.isDone = false;
    console.log(newTask);

    setTasks([...tasks, newTask]);
    console.log(tasks);
  };

  const deleteTask = (event) => {
    console.log(event)
  }

  return (
    <div className="container">
      <h3 className="text-center">Tasks Dashboard</h3>
      <div className="row gy-3 justify-content-around mt-5">
        <Todo onAddTask={addTask} onDeleteTask={deleteTask} tasks={tasks} classes={'col-10 col-md-5 col-lg-5'} />
        <Done tasks={tasks} classes={'col-10 col-md-5 col-lg-5'} />
      </div>
    </div>
  )
}

export default Dashboard
