import { CheckBox } from '@mui/icons-material'
import { Button } from '@mui/material'
import React, { useContext, useState } from 'react'
import List from '../../components/List/List'
import { TaskContext } from '../../context/tasksContext'
import styles from './Todo.module.css'
import { v4 as uuid } from 'uuid'
import { useFormik } from 'formik'
import Input from '../../components/Input'
import { taskValidationSchema } from '../../validations.js'
import { useForm } from 'react-hook-form'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'



const Todo = () => {
    const { tasks, setTasks } = useContext(TaskContext)
    const [hideCompleted, setHideCompleted] = useState(false)

    const formik = useFormik({
        initialValues: { task: "" },
        validationSchema: taskValidationSchema,
        onSubmit: ({ task }, { resetForm }) => {
            console.log("tasks", tasks)
            setTasks((prevTasks) => ([{ checked: false, name: task, id: uuid() }, ...prevTasks]))
            resetForm({ values: '' })
        }
    })
    const { head, input_container, input, input_head, input_field, input_field_lfs, helper_text, head_title, addBtn } = styles

    return (
        <div>
            <div className={head}>
                <input value={hideCompleted} onChange={() => { setHideCompleted(!hideCompleted) }} type="checkbox" className='checkbox' style={{ marginRight: '15px' }} />
                <p className={head_title}>Hide Component</p>
            </div>
            <div className={input_container}>
                <p className={input_head}>Task</p>
                <form onSubmit={formik.handleSubmit} className={input_field}>
                    <div className={input_field_lfs}>
                        <input value={formik.values.task} onChange={formik.handleChange} style={formik.errors?.task ? { border: '1px solid red' } : {}} name='task' placeholder='Write here' className={input} />
                        <p className={helper_text}>{formik.errors?.task}</p>
                    </div>
                    <Button className='addBtn' type='submit' sx={{ ml: '24px', width: '100px', background: '#008594' }} variant="contained">Add</Button>
                </form>
            </div>
            <List hideCompleted={hideCompleted} />
        </div>
    )
}

export default Todo