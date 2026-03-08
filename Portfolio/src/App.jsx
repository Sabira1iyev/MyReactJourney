import Header from './Header'
import Home from './Home'
import About from './About'
import Skills from './Skills'
import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const cppCode = `
#include <iostream>
using namespace std;

int main() {
  cout << "Hello world!";
	string code = " Portfolio loaded... " ;
	  for ( char c : code ) {
		    cout << c << " ";
	}
	return 0;
}
  `

  return (
    <>
      <Header />
      <Home codeContent={cppCode} />
      <Skills />
      <About />
    </>
  )
}

export default App 
