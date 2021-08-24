import React from "react";
import Task from "../task/Task";
import { Droppable } from "react-beautiful-dnd";
import "./done.scss";

const Done = (props) => {
  const { onDeleteTask } = props;
  return (
    <div className={`${props.classes} doneList rounded shadow`}>
      <div className="row justify-content-between align-items-center my-4">
        <h5 className="col-1 fw-bold">Completed:</h5>
      </div>
      <Droppable droppableId="droppable-2">
        {(provided, snapshot) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            {props.tasks.length > 0 &&
              props.tasks.map((task, index) => {
                return (
                  <Task
                    key={task.id}
                    id={task.id}
                    title={task.title}
                    index={index}
                    description={task.description}
                    deleteTask={onDeleteTask}
                  />
                );
              })}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default Done;
