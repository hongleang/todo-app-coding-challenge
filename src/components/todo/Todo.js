import React from "react";
import Modal from "../modal/Modal";
import EditTask from "../modal/EditTask";
import "./todo.scss";
import Task from "../task/Task";

import { Droppable } from "react-beautiful-dnd";

const Todo = (props) => {
  const { onAddTask, onEditTask, onDeleteTask } = props;

  return (
    <div className={`${props.classes} todolist rounded shadow`}>
      <div className="row justify-content-between align-items-center my-2">
        <h5 className="col-1 fw-bold">Todos:</h5>
        <button
          className="col-2 fs-3 btn"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
        >
          <i className="fas fa-plus-circle"></i>
        </button>
      </div>
      <Modal addTask={onAddTask} />
      <EditTask editTask={onEditTask} />
      <Droppable droppableId="droppable-1">
        {(provided, snapshot) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            {props.tasks.length > 0 &&
              props.tasks.map((task, index) => {
                return (
                  <Task
                    key={task.id}
                    id={task.id}
                    title={task.title}
                    index={index}
                    description={task.description}
                    deleteTask={onDeleteTask}
                  />
                );
              })}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default Todo;
