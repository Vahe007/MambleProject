import { createContext, useEffect, useState } from "react"


export const TaskContext = createContext(null)
export const useTaskContext = () => {
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('tasks'))
        data?.length && setTasks(data)
    }, [])

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }, [tasks])

    
    return { tasks, setTasks }
}