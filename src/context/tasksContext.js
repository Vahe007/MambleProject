import { createContext, useState } from "react"


export const TaskContext = createContext(null)
export const useTaskContext = () => {
    const [tasks, setTasks] = useState([])
    return { tasks, setTasks }
}