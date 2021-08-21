import React from "react";

const Task = (props) => {
  return (
    <div>
      <div className="card shadow my-3 p-2">
        <div className="card-body">
          <h5 className="card-title fw-bold">{props.title}</h5>
          <p className="text-muted text-gray">
            {props.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Task;
