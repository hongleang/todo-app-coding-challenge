import React from 'react';
import './todo.scss';

import Task from './Task';

const Todo = (props) => {
  return (
    <div className={`todoList ${props.classes}`}>
      <div className="todoWrapper">
        <div className="row justify-content-between my-2">
          <h5 className="col">Todos:</h5>
          <span className="col">Todos:</span>
        </div>
        <Task />
      </div>
    </div>
  )
}

export default Todo
