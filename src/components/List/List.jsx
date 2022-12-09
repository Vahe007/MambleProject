import React, { useContext } from 'react'
import { TaskContext } from '../../context/tasksContext'
import Item from '../Item/Item'
import styles from './List.module.css'

const List = ({ hideCompleted }) => {
  const { tasks } = useContext(TaskContext)
  const { empty1, empty2 } = styles
  return (
    <div>
      {!tasks.length
        ? <div>
          <p className={empty1}>Your life is a blank page. You write on it.</p>
          <p className={empty2}>So start by adding your tasks here.</p>
        </div>
        : hideCompleted ? tasks.map(({ name, id, checked }) => {
          if (!checked) {
            return <Item checked={checked} name={name} id={id} key={id} />
          }
        }) : tasks.map(({ name, id, checked }) => (
          <Item checked={checked} name={name} id={id} key={id} />
        ))
      }
    </div>
  )
}

export default List