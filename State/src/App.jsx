import { useState } from 'react'
import './App.css'

function App() {
  
  const[value, setValue] = useState(0);
 
  const handleClick = () => {
    setValue(value + 1);
  }
  return (
    <>
      <button onClick={handleClick}>kurs ekle</button>
      <div>kurs sayisi:{value}</div>
    </>
  )
}

export default App
