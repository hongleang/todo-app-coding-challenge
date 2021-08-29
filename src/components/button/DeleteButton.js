import React from "react";
import "./button.scss";

const DeleteButton = ({ deleteTask, id, containerId }) => {
  return (
    <>
      <button onClick={() => deleteTask(id, containerId)} className="btn">
        <i className="hovering-effect fas fa-trash fs-5 deleteIcon"></i>
      </button>
    </>
  );
};

export default DeleteButton;
