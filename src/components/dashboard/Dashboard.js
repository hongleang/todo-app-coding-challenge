import React from 'react';
import Todo from '../todo/Todo';
import Done from '../done/Done';

const Dashboard = () => {
  return (
    <div className="container">
      <h3 className="text-center">Tasks Dashboard</h3>
      <div className="row jutify-content-between mt-5">
        <Todo classes={'col-sm-6'}/>
        <Done classes={'col-sm-6'}/>
      </div>
    </div>
  )
}

export default Dashboard
