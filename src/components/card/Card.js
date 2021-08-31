import React from "react";
import EditButton from "../button/EditButton";
import DeleteButton from "../button/DeleteButton";

import "./card.scss";

const Card = ({
  id,
  title,
  description,
  status,
  deleteTask,
  container,
  containerId,
}) => {
  const isDone = status ? "crossed-out text-muted" : "text-decoration-none";

  const isTodoList = container === "Todo";

  const editButton = isTodoList && (
    <EditButton id={id} title={title} description={description} />
  );

  return (
    <div className={`card shadow bg-dark text-light my-3 p-2 ${isDone}`}>
      <div className="card-body">
        <div className="card__header mb-1">
          <h5 className={`card-title fw-bold ${isDone}`}>{title}</h5>
          <div className="d-flex">
            <DeleteButton
              id={id}
              containerId={containerId}
              deleteTask={deleteTask}
            />
            {editButton}
          </div>
        </div>
        <p className={`${isDone}`}>{description}</p>
      </div>
    </div>
  );
};

export default Card;
