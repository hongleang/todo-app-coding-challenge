import React from "react";
import { Draggable } from "react-beautiful-dnd";
import Card from "../card/Card";
import "./task.scss";

const Task = (props) => {
  const {
    id,
    index,
    title,
    description,
    status,
    deleteTask,
    container,
    containerId,
  } = props;

  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <div
          className="task"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <Card
            id={id}
            title={title}
            description={description}
            status={status}
            deleteTask={deleteTask}
            container={container}
            containerId={containerId}
          />
        </div>
      )}
    </Draggable>
  );
};

export default Task;
