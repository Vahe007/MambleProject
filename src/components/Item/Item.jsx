import React, { useContext, useState } from 'react'
import styles from './Item.module.css'
import CloseIcon from '@mui/icons-material/Close';
import { TaskContext } from '../../context/tasksContext';
import { CheckBox } from '@mui/icons-material';
import Modal from '../Modal'

const Item = ({ name, checked, id }) => {
  const { tasks, setTasks } = useContext(TaskContext)
  const [open, setOpen] = useState(false)
  const { task_container, task_lfs, task_content, checkbox } = styles

  const handleChange = () => {
    setTasks((prevTasks) => {
      const updatedTasks = prevTasks.map((task) => {
        if (task.id === id) {
          task.checked = !checked
        }
        return task
      })
      return updatedTasks
    })
  }

  const dialogProps = {
    content: 'Are you sure you want to delete?',
    setOpen,
    open,
    handleConfirm: () => {
      setTasks((prevTasks) => {
        return prevTasks.filter((task) => task.id !== id)
      })
    }
  }

  return (
    <div className={task_container}>
      <div className={task_lfs}>
        <div>
          <input className='checkbox' type="checkbox" onChange={handleChange} checked={checked} />
          {/* <CheckBox onChange={handleChange} checked={checked} sx={{ color: '#008594' }} /> */}
        </div>
        <p className={task_content}>{name}</p>
      </div>
      <CloseIcon onClick={() => setOpen(true)} sx={{ color: '#174348', cursor: 'pointer' }} />
      {open && <Modal {...dialogProps} />}
    </div>
  )
}

export default Item