import React from 'react'

const Done = (props) => {
  return (
    <div className={props.classes}>
      <h3>Completed tasks: </h3>
      <ul>
        <li>Visit the community center</li>
      </ul>
    </div>
  )
}

export default Done
