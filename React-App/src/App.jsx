import { useState } from 'react'
import TaskCreate from './Components/TaskCreate'
import TaskList from './Components/TaskList'
import './App.css'

function App() {
  const [tasks, setTasks] = useState([]);
  const createTask = (title, taskDesc) => {
    const createdTasks = [
      ...tasks, {
        id: Math.round(Math.random() * 999),
        title,
        taskDesc
      }
    ];

    setTasks(createTask);
  };

  return (
    <div className='App'>
      <TaskCreate onCreate={createTask} />
      <h1>Gorevler</h1>
      <TaskList tasks={tasks} />
    </div>
  )
}

export default App
