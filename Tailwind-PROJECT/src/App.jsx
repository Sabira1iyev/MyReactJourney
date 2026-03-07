// import { useState } from "react";
import "./App.css";

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

// const Mesage = (props) => {
//   const { bgColor, text } = props;

//   return (
//     <div
//       style={{
//         backgroundColor: bgColor,
//         color: "blue",
//       }}
//     >
//       {text}
//     </div>
//   );
// };

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <>
//       <Mesage text="this is my first prop" bgColor="red" />
//       <Mesage text="h1" bgColor="yellow" />
//       <Mesage text="bye" bgColor="purple" />
//     </>
//   );
// }

// export default App;

// const Box = (props) => {
//   const { label, bgColor, textColor, large } = props;

//   console.log(large);

//   return (
//     <div
//       style={{
//         backgroundColor: bgColor,
//         color: textColor,
//         fontSize: large ? '40px' : '12px',
//         marginTop: '20px',
//       }}
//     >
//       {label}
//     </div>
//   );
// };

// const App = () => {
//   return (
//     <div>
//       <Box
//         label="my name is Sabir"
//         bgColor="CornflowerBlue"
//         textColor="Green"
//         large={true}
//       />

//       <Box
//         label="Another one"
//         bgColor="Lavender"
//         textColor="Yellow"
//         large = {false}
//       />

//       <Box
//         label="green stuff"
//         bgColor="Green"
//         textColor="Yellow"
//       />

//     </div>
//   );
// };

// export default App;

import MyComponent from "./MyComponent";

// const App = () => {
//   return (
//     <div>
//       <MyComponent bgColor="Yellow" height={120}>Hello Sabir</MyComponent>
//       <MyComponent bgColor="Green" height={90} marginTop={20}>Goodbye</MyComponent>
//     </div>
//   );
// };

// export default App;


// const App = () => {
//   return (
//     <div>
//       {/* 
//       <div className="text-rose-300 bg-red-500">one</div>
//       <div className="text-slate-300 border-2 border-slate-600">two</div>
//       <div className="text-2xl bg-emerald-200 text-blue-600">three</div>

//       <div className="text-xl text-purple-500">
//         <div className="border-4 border-sky-500">four</div>
//         <div className="bg-violet-200 border-l-8 border-purple-800">five</div>
//         * <div className="text-red-500">six</div> *
//       </div> */}
//       {/* <div className="text-3xl">
//         <div className="text-red-300 bg-amber-400 border-r-4 border-green-500">one</div>
//         <div className="text-5xl text-pink-600 border-y-4 border-blue-700">two</div>
//         <div className="text-green border-y-8 border-violet-700">three</div>
//       </div> */}


//       <button className="border-2 border-green-600 text-green-400 px-8 py-2 m-4 rounded-md">
//         first
//       </button>

//       <button className="rounded-lg bg-sky-400 text-white px-10 py-4 text-lg hover:text-base">second</button>

//       <button className="bg-violet-100 text-violet-600 px-8 py-2 m-8 rounded-full">third</button>

//       <button className="m-4 bg-cyan-700 text-cyan-200 p-10 rounded-lg hover:bg-yellow-500 hover:text-cyan-700">four</button>
//     </div>
//   )
// }
// export default App


// Tailwind classnames
// const App = () => {


//   const boolean = false;

//   return (
//     // <div className={`bg-${boolean ? "orange" : "blue"}-600`}>

//     <div className={`${boolean ? "bg-orange-600" : "bg-blue-500"} text-white`}>


//         todo
//       </div>
//       )
// }

//       export default App




// Button Exercises

// import FancyButton from "./FancyButton";
// const App = () => {
//   return (
//     <div>

//       <FancyButton>Click me</FancyButton>
//       <FancyButton large>Submit</FancyButton>

//     </div>
//   )
// }

// export default App


// import FancyButton from "./FancyButton";

// const App = () => {
//   return (
//     <div className="p-3">
//       <FancyButton style={true}>Click me</FancyButton>
//       <FancyButton style={false}>Get</FancyButton>
//     </div>
//   )
// }

// export default App


//   Flex-Column

// import React from 'react'

// import FlexCol from "./FlexCol";

// const App = () => {
//   return (
//     <div>
//       <FlexCol/>
//     </div>
//   )
// }

// export default App


// Tailwind Docs

// import React from 'react'

// import Docs from "./Docs";
// const App = () => {
//   return (
//     <div>
//       <Docs />
//     </div>
//   )
// }

// export default App


// Layout exercise

import Layout from "./Layout";
import Layout2 from "./Layout2";
import Layout3 from "./Layout3";


const quote1 = {
  text: "One of my most productive days was throwing away 1000 lines of code.",
  author: "Ken Thompson",
  bio: "Designer of unix Operating system",
};

const quote2 = {
  text: "A ship in port is safe but tha's not what ships are built for.",
  author: "Admiral Grace Hopper",
  bio: "Inventor of Programming Compilers",
};

const quote3 = {
  text: "If you optimize everything, you will always be unhappy.",
  author: "Donald Knuth",
  bio: "Pionner of Algorithm Analysis",
};



const App = () => {
  return (
    <div className="flex  flex-col items-center">
      <Layout quote={quote1} />
      <Layout2 quote={quote2} />
      <Layout3 quote={quote3} />
    </div>
  )
}

export default App
