import React from "react";
import Modal from "../modal/Modal";
import "./todo.scss";

import Task from "../task/Task";

const Todo = (props) => {
  const { onAddTask, onDeleteTask } = props;

  return (
    <div className={`${props.classes} todolist rounded shadow`}>
      <div className="row justify-content-between align-items-center my-2">
        <h5 className="col-1 fw-bold">Todos:</h5>
        <button className="col-2 fs-3 btn" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
          <i className="fas fa-plus-circle"></i>
        </button>
        <Modal addTask={onAddTask} />

      </div>
      {props.tasks.length > 1 && props.tasks.map((task) => {
        return (
          task.isDone === false && <Task key={task.id} title={task.title} description={task.description} deleteTask={onDeleteTask}/>
        )
      })}
    </div>
  );
};

export default Todo;
