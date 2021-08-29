import React from "react";
import { Draggable } from "react-beautiful-dnd";
import "./task.scss";

const Task = (props) => {
  const { title, description, completed, id, deleteTask, index, container, containerId } =
    props;

  const isDone = completed
    ? "text-decoration-line-through text-muted bg-gray-900"
    : "text-decoration-none";

  const passDataToModal = ( title, description) => {
    const editModal = document.querySelector("#editTaskModal");
    editModal.addEventListener("shown.bs.modal", () => {
      const modalBodyTitle = editModal.querySelector("#form-title");
      const modalBodyDescription = editModal.querySelector("#form-description");

      editModal.dataset.taskId = id;
      modalBodyTitle.value = title;
      modalBodyDescription.value = description;
    });
  };

  const handleClick = () => {
    passDataToModal(id, title, description);
  };

  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <div
          className="task"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div className={`card shadow my-3 p-2 ${isDone}`}>
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <h5 className={`card-title fw-bold ${isDone}`}>{title}</h5>
                <div className="button-wrapper">
                  <button onClick={() => deleteTask(id, containerId)} className="btn">
                    <i className="fas fa-trash fs-5 deleteIcon"></i>
                  </button>
                  {container === "Todo" && (
                    <button
                      data-bs-toggle="modal"
                      data-bs-target="#editTaskModal"
                      data-task-id={id}
                      onClick={handleClick}
                      className="btn"
                    >
                      <i className="far fa-edit fs-5 deleteIcon"></i>
                    </button>
                  )}
                </div>
              </div>
              <p className={`${isDone}`}>{description}</p>
            </div>
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default Task;
