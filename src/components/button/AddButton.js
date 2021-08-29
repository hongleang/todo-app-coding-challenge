import React from "react";
import "./button.scss";

const addButton = () => {
  return (
    <>
      <button
        className="col-2 fs-3 btn"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        <i className="hovering-effect fas fa-plus-circle"></i>
      </button>
    </>
  );
};

export default addButton;
