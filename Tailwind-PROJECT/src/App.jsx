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


const Mesage = (props) => {

  const { color, text } = props;

  return (
    <div>
 
 

    </div>
  )
}



function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Mesage text="this is my first prop"
        color="red"

      />

    </>
  )
}

export default App
