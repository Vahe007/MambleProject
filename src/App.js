import './App.css';
import { TaskContext, useTaskContext } from './context/tasksContext';
import Todo from './pages/Todo';

function App() {
  const { tasks, setTasks } = useTaskContext()
  return (
    <TaskContext.Provider value={{tasks, setTasks}}>
      <div className="App">
        <Todo />
      </div>
    </TaskContext.Provider>
  );
}

export default App;
