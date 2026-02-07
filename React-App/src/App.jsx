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

    setTasks(createdTasks);
  };


  const deleteTaskById = (id) => {
    const afterDeletingTasks = tasks.filter((task) => {
      return task.id !== id;
    });
    setTasks(afterDeletingTasks);
  };

  const editTaskById = (id, updatedTitle, updatedTeskDesc) => {
      const UpdatedTask = tasks.map((task) =>{
        if(task.id === id){
          return {id,title:updatedTitle, taskDesc:updatedTeskDesc}
        }
        return task;
      });
      setTasks(UpdatedTask);
  };

  return (
    <div className='App'>
      <TaskCreate onCreate={createTask} />
      <h1>Gorevler</h1>
      <TaskList tasks={tasks} onDelete={deleteTaskById} onUpdate={editTaskById} />
    </div>
  )
}

export default App
