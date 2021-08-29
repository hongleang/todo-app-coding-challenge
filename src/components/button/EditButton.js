import React from "react";
import "./button.scss";

const EditButton = ({ id, title, description }) => {

  const passDataToModal = (taskId, taskTitle, taskDescription) => {
    const editModal = document.querySelector("#editTaskModal");
    editModal.addEventListener("shown.bs.modal", () => {
      const modalBodyTitle = editModal.querySelector("#form-title");
      const modalBodyDescription = editModal.querySelector("#form-description");

      editModal.dataset.taskId = taskId;
      modalBodyTitle.value = taskTitle;
      modalBodyDescription.value = taskDescription;
    });
  };

  const handleClick = () => {
    passDataToModal(id, title, description);
  };

  return (
    <>
      <button
        data-bs-toggle="modal"
        data-bs-target="#editTaskModal"
        data-task-id={id}
        onClick={handleClick}
        className="btn"
      >
        <i className="hovering-effect far fa-edit fs-5 deleteIcon"></i>
      </button>
    </>
  );
};

export default EditButton;
