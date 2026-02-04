import { useState } from 'react'
import TaskCreate from './Components/TaskCreate'
import TaskList from './Components/TaskList'
import './App.css'

function App() {

  return (
    <div className='App'>
      <TaskCreate />
      <h1>Gorevler</h1>     
      <TaskList />
    </div>
  )
}

export default App
