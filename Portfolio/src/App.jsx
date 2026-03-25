import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

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
  `;

  const about = `HI, SABIR IS HERE`;

  return (
    <div className="min-h-screen" style={{
      background: `
          radial-gradient(at 20% 50%, #1e1b4b 0%, transparent 50%),
          radial-gradient(at 80% 20%, #0f172a 0%, transparent 50%),
          radial-gradient(at 60% 80%, #1e3a5f 0%, transparent 50%),
          #0a0f1e
      `
    }}>
      <Header />
      <Home codeContent={cppCode} aboutMe={about} />
      <About />
      <Skills />
    </div>
  );
}

export default App;
