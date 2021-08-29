import React from "react";
import Modal from "../modal/Modal";
import EditTask from "../modal/EditTask";
import TasksContainer from "../task/TasksContainer";
import { Droppable } from "react-beautiful-dnd";

import "./list.scss";

const List = (props) => {
  const {
    name,
    tasks,
    id,
    onAddTask,
    onEditTask,
    onDeleteTask,
    onSearchTask,
  } = props;

  const isTodoList = name === "Todo";

  let addButton = null;
  let searchField = null;

  if (isTodoList) {
    addButton = (
      <button
        className="col-2 fs-3 btn"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        <i className="fas fa-plus-circle"></i>
      </button>
    );

    searchField = (
      <input
        type="text"
        placeholder="Search your task..."
        onChange={(event) => onSearchTask(event.target.value)}
        className="form-control py-2"
      />
    );
  }

  return (
    <div className={`${props.classes} list rounded shadow`}>
      <div className="row justify-content-between align-items-center my-2">
        <h5 className="col-1 fw-bold">{name}</h5>
        {addButton}
      </div>
      {searchField}

      <Modal colId={id} addTask={onAddTask} />
      <EditTask colId={id} editTask={onEditTask} />

      <Droppable droppableId={id} key={id}>
        {(provided) => (
          <TasksContainer
            id={id}
            name={name}
            provided={provided}
            tasks={tasks}
            deleteTask={onDeleteTask}
          />
        )}
      </Droppable>
    </div>
  );
};

export default List;
