import React, { useState } from "react";

const Modal = (props) => {
  const [task, setTask] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setTask({...task, [name]: value});
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    props.addTask(task);
  };

  return (
    <div
      className="modal fade"
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Add Task</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form onSubmit={ handleSubmit }>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="from-title"
                  name="title"
                  onChange={ handleChange }
                />
                <label htmlFor="form-title" className="form-label">
                  Title
                </label>
              </div>
              <div className="form-floating">
                <textarea
                  className="form-control"
                  id="form-description"
                  style={{ height: "200px" }}
                  name="description"
                  onChange={ handleChange }
                ></textarea>
                <label htmlFor="form-description" className="form-label">
                  Description...
                </label>
              </div>
              <div className="modal-footer">
                <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">
                  Add task
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
