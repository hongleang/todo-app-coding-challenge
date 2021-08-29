import React from "react";
import Task from "../task/Task";

const TasksContainer = ({id, name, provided, tasks, deleteTask}) => {
  return (
    <div
      className="tasksContainer"
      ref={provided.innerRef}
      {...provided.droppableProps}
    >
      {tasks.map((task, index) => (
        <Task
          key={task.id}
          id={task.id}
          title={task.title}
          completed={task.isDone}
          container={name}
          containerId={id}
          index={index}
          description={task.description}
          deleteTask={deleteTask}
        />
      ))}
      {provided.placeholder}
    </div>
  );
};

export default TasksContainer;
