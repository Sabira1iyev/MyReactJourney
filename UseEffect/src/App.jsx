import { useEffect, useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log("the count is: ", count);


    return () => {
      console.log("I am being cleaned up!");
    };


  }, [count]);

  return (
    <div className='tutorial'>

      <h1>Count : {count}</h1>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>


  )
}

export default App
