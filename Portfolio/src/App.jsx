import Header from './Header'
import Home from './Home'
import { useState } from 'react'
 
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
 <Header/>
 <Home/>
    </>
  )
}
 
export default App 
