import { CheckBox } from '@mui/icons-material'
import React from 'react'
import styles from './Item.module.css'
import CloseIcon from '@mui/icons-material/Close';

const Item = ({ name, checked, id }) => {
  const { task_container, task_lfs, task_content } = styles
  return (
    <div className={task_container}>
      <div className={task_lfs}>
        <CheckBox checked={checked} sx={{color: '#008594'}} />
        <p className={task_content}>{name}</p>
      </div>
      <CloseIcon sx={{color: '#174348'}} />
    </div>
  )
}

export default Item