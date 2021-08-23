import React, { useState } from "react";


const EditTask = (props) => {
  // Get task ID
  // Get task title and description set to input value
  // Set new title and description to object
  // Send object to edit method
  const { editTask } = props;
  const [task, setTask] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    if (value.length > 0){
      setTask({...task, [name]: value});
    }
    
  }

  const handleSubmit = (event) => {
    const editTaskModal = document.querySelector('#editTaskModal');
    const id = editTaskModal.getAttribute('data-task-id');
    event.preventDefault();
    if (Object.keys(task).length === 0) {
      return;
    }
    console.log(task);
    editTask(id, task);
  };

  return (
    <div
      className="modal fade"
      id="editTaskModal"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby="editTaskModal"
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
                  id="form-title"
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
                  Edit task
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditTask;
