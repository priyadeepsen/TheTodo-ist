import React from 'react'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

function Todo({ task, deleteTodo }) {
  return (
    <div className='Todo'>
      <p
        className={`${task.completed ? "completed" : "incompleted"}`}>
        {task.task}
      </p>
      <div>
        <FontAwesomeIcon
          className='edit-icon'
          icon={faPenToSquare}
        />
        <FontAwesomeIcon
          className='delete-icon'
          icon={faTrash}
          onClick={() => deleteTodo(task.id)}
        />
      </div>
    </div>
  )
}

export default Todo