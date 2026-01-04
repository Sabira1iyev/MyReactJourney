import { useState } from 'react'
import SearchHeader from './SearchHeader.jsx';
import './App.css'

function App() {

  const handleSubmit = () =>{

  }
  
  return (
    < div className="App">
     <SearchHeader search={handleSubmit}/>
    </div>
  )
}

export default App;
