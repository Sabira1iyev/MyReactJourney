import { useState } from 'react'
import './App.css'
import Card from './Card'

function App() {
  const [count, setCount] = useState(0)

 
  return (
    <>
      <div className="card-container">
        <Card title="Star wars" rating={5} isCool={true} />
        <Card title="Avatar" />
        <Card title="The Lion King" />
      </div>
    </>
  )
}

export default App
