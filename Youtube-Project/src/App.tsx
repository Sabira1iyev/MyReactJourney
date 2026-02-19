// import ListGroup from './componenets/ListGroup'
// import Alert from './componenets/Alert'
// import { useState } from 'react'
import Button from './componenets/Button'

import './App.css'
import Alert from './componenets/Alert'
import { useState } from 'react'


function App() {

  // let items = ["New York", "San Fransisco", "Tokyo", "London", "Paris"];

  // const handleSelectItem = (item: string) => {
  //   console.log(item);
  // }
  // const [count, setCount] = useState(0)

  const [alertVisible, setAlertVisibility] = useState(false)

  return (
    <>
      {/* <ListGroup items={items} heading='Cities' onSelectItem={handleSelectItem} /> */}
      {/* <Alert>
        Hello <span>World</span>
      </Alert> */}
      {alertVisible && <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert>}
      <Button color='primary' onClick={() => setAlertVisibility(true)}>
        My Button
      </Button>
    </>
  )
}

export default App
