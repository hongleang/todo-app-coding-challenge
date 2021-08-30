import React from "react";
import Modal from "../modal/Modal";
import EditTask from "../modal/EditTask";
import TasksContainer from "../task/TasksContainer";
import AddButton from '../button/AddButton'
import SearchField from "../searchField/SearchField";

import { Droppable } from "react-beautiful-dnd";

import "./list.scss";

const List = (props) => {
  const {
    name,
    tasks,
    id,
    onAddTask,
    onEditTask,
    onDeleteTask,
    onSearchTask,
  } = props;

  const isTodoList = name === "Todo";
  const addButton = isTodoList && <AddButton />
  const searchField = isTodoList && <SearchField onSearchTask={onSearchTask}/>
  
  return (
    <div className={`${props.classes} list rounded shadow`}>
      <div className="list-header row justify-content-between align-items-center my-2">
        <h5 className="col-1 fs-4 fw-bold">{name}</h5>
        {addButton}
      </div>
      {searchField}

      <Modal colId={id} addTask={onAddTask} />
      <EditTask colId={id} editTask={onEditTask} />

      <Droppable droppableId={id} key={id}>
        {(provided) => (
          <TasksContainer
            id={id}
            name={name}
            provided={provided}
            tasks={tasks}
            deleteTask={onDeleteTask}
          />
        )}
      </Droppable>
    </div>
  );
};

export default List;
