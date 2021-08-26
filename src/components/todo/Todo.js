import React, {useState} from "react";
import Modal from "../modal/Modal";
import EditTask from "../modal/EditTask";
import "./todo.scss";
import Task from "../task/Task";

import { Droppable } from "react-beautiful-dnd";

const Todo = (props) => {
  
  const {
    title,
    tasks,
    id,
    onAddTask,
    onEditTask,
    onDeleteTask,
    onSearchTask,
  } = props;

  return (
    <div className={`${props.classes} todolist rounded shadow`}>
      <div className="row justify-content-between align-items-center my-2">
        <h5 className="col-1 fw-bold">{title}</h5>
        {title === "Todo" && (
          <button
            className="col-2 fs-3 btn"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
          >
            <i className="fas fa-plus-circle"></i>
          </button>
        )}
      </div>
      {title === "Todo" && (
        <input type="text" onChange={ event => onSearchTask(event.target.value)} className="form-control" />
      )}
      <Modal colId={id} addTask={onAddTask} />
      <EditTask colId={id} editTask={onEditTask} />
      <Droppable droppableId={id} key={id}>
        {(provided) => (
          <div
            className="tasksContainer"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {tasks.map((task, index) => (
              <Task
                key={task.id}
                id={task.id}
                col={title}
                colId={id}
                title={task.title}
                index={index}
                description={task.description}
                deleteTask={onDeleteTask}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default Todo;
