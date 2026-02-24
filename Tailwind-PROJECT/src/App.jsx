import { useState } from 'react'
import './App.css'

// const Title = () => {

//   console.log("running title")

//   return (
//     <div>
//       hello world
//     </div>
//   )
// };

// const Description = () => {
//   console.log("running description")
//   return (
//     <>
//       <p>my name is Sabir</p>
//     </>
//   )
// }


const Mesage = () => {
  return (
    <div>

      i am messsage
    </div>
  )
}



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      todo
      <Mesage />
    </>
  )
}

export default App
