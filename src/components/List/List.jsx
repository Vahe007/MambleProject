import React, { useContext, useState } from 'react'
import { TaskContext } from '../../context/tasksContext'
import Item from '../Item/Item'

const List = () => {
  const { tasks } = useContext(TaskContext)
  return (
    <div>
      {!!tasks.length && tasks.map(({name, id, checked}) => (
        <Item checked={checked} name={name} id={id} key={id} />
      ))}
    </div>
  )
}

export default List