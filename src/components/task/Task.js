import React, { useEffect } from "react";
import "./task.scss";
import { Draggable } from "react-beautiful-dnd";

const Task = (props) => {
  const { title, description, id, deleteTask, index, col, colId } = props;

  const passDataToModal = (taskId, title, description) => {
    const editModal = document.querySelector("#editTaskModal");
    editModal.addEventListener("shown.bs.modal", function (event) {
      const modalBodyTitle = editModal.querySelector("#form-title");
      const modalBodyDescription = editModal.querySelector("#form-description");

      editModal.dataset.taskId = id;
      modalBodyTitle.value = title;
      modalBodyDescription.value = description;
    });
  };

  const handleClick = (e) => {
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
          <div className="card shadow my-3 p-2">
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <h5 className="card-title fw-bold">{title}</h5>
                <div className="button-wrapper">
                  <button onClick={() => deleteTask(id, colId)} className="btn">
                    <i className="fas fa-trash fs-5 deleteIcon"></i>
                  </button>
                  {col === 'Todo' && <button
                    data-bs-toggle="modal"
                    data-bs-target="#editTaskModal"
                    data-task-id={id}
                    onClick={handleClick}
                    className="btn"
                  >
                    <i className="far fa-edit fs-5 deleteIcon"></i>
                  </button>}
                </div>
              </div>
              <p className="text-muted text-gray">{description}</p>
            </div>
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default Task;
