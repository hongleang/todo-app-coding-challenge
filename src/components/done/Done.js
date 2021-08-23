import React from 'react';
import Task from '../task/Task';

import './done.scss';

const Done = (props) => {
  return (
    <div className={`${props.classes} doneList rounded shadow`}>
      <div className="row justify-content-between align-items-center my-4">
        <h5 className="col-1 fw-bold">Completed:</h5>  
      </div>
      
    </div>
  )
}

export default Done
