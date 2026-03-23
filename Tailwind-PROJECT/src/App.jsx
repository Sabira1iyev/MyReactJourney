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

// import Layout from "./Layout";
// import Layout2 from "./Layout2";
// import Layout3 from "./Layout3";

// const quote1 = {
//   text: "One of my most productive days was throwing away 1000 lines of code.",
//   author: "Ken Thompson",
//   bio: "Designer of unix Operating system",
// };

// const quote2 = {
//   text: "A ship in port is safe but tha's not what ships are built for.",
//   author: "Admiral Grace Hopper",
//   bio: "Inventor of Programming Compilers",
// };

// const quote3 = {
//   text: "If you optimize everything, you will always be unhappy.",
//   author: "Donald Knuth",
//   bio: "Pionner of Algorithm Analysis",
// };

// import Header from "./Header";
// import Search from "./Search";
// import Footer from "./Footer";

// const App = () => {
//   return (
//     <div className="h-screen flex flex-col">
//       <Header />
//       <Search/>
//       <Footer/>
//     </div>
//   )
// }

// export default App

// Click event exercise
// import { useState } from "react";
// import React from 'react'

// const App = () => {

//   const [message, setMessage] = useState("sabir was here")

//   const changeMessage = (buttonText) => {
//     if (buttonText === "one") {
//       setMessage("clicked one")
//     }
//     else if (buttonText === "two") {
//       setMessage("clicked two")
//     }
//     else if (buttonText === "three") {
//       setMessage("clicked three");
//     }
//   }

//   return (
//     <div className="flex flex-col items-center justify-center border-2 border-black
//     h-screen">
//       <div className="text-3xl text-stone-400">{message}</div>
//       <div className="mt-4">
//         <button className="m-2 px-4 py-2 text-white bg-green-400 rounded-md cursor-pointer" onClick={() => changeMessage("one")}>One</button>
//         <button className="m-2 px-4 py-2 text-white bg-red-400 rounded-md cursor-pointer" onClick={() => changeMessage("two")}>Two</button>
//         <button className="m-2 px-4 py-2 text-white bg-violet-400 rounded-md cursor-pointer" onClick={() => changeMessage("three")}>Three</button>
//       </div>
//     </div>
//   )
// }

// export default App

// import Widget1 from "./Widget1";
// import Widget2 from "./Widget2";
// import Widget3 from "./Widget3";

// const App = () => {
//   return (
//     <div className="flex flex-col items-center">
//       <Widget1 />
//       <Widget2 />
//       <Widget3/>
//     </div>
//   )
// }

// export default App

// import { useState } from "react";

// const App = () => {
//   const [count, setCount] = useState(0);

//   return (
//     <div className="text-4xl h-screen flex justify-center items-center">
//       <button
//         className="text-white w-8 rounded-md text-4xl bg-red-400"
//         onClick={() => {
//           setCount(count - 1);
//         }}
//       >
//         -
//       </button>
//       <div className="m-4 text-neutral-600">{count}</div>
//       <button
//         className="text-white w-8  rounded-md bg-emerald-400"
//         onClick={() => {
//           setCount(count + 1);
//         }}
//       >
//         +
//       </button>
//     </div >
//   );
// };

// export default App;

// import { useState } from "react";

// import clsx from 'clsx';

// const App = () => {
//   const [isOn, setIsOn] = useState(false);

//   return (
//     <div
//       className={clsx("flex justify-center h-screen items-center",
//         isOn ? "bg-yellow-200" : "bg-slate-600")}
//     >
//       <button
//         className="cursor-pointer"
//         onClick={
//           () => setIsOn(!isOn)
//           //   {
//           //   if (isOn) {
//           //     setIsOn(false);
//           //   } else {
//           //     setIsOn(true);
//           //   }
//           // }
//         }
//       >
//         <div
//           className={clsx("h-8 w-6"
//             , isOn ? "bg-slate-400" : "bg-slate-200")}
//         ></div>
//         <div
//           className={clsx("h-8 w-6 $",
//             isOn ? "bg-slate-200" : "bg-slate-400")}
//         ></div>
//       </button>
//     </div>
//   );
// };

// export default App;

// import { useState } from "react";

// import dog1 from './assets/dog1.png'
// import dog2 from './assets/dog2.png'
// import dog3 from './assets/dog3.png'
// import dog4 from './assets/dog4.png'
// import dog5 from './assets/dog5.png'


// const Images = [
//   dog1,
//   dog2,
//   dog3,
//   dog4,
//   dog5
// ]

// const App = () => {

//   const [imageIndex, setImageIndex] = useState(2);

//   return (
//     <div className="flex flex-col items-center justify-center mt-8">
//       <div className="text-cyan-400 text-2xl font-bold">{`Dog ${imageIndex + 1}`}</div>
//       <div className="flex justify-center items-center">
//         <button onClick={() => {
//           if(imageIndex > 0){
//           setImageIndex(imageIndex - 1)
//           }
//         }}
//           className="bg-orange-400 rounded-full w-8 h-8 text-orange-100">
//           <i className="fa-solid fa-chevron-left"></i>
//         </button>
//         <img className=" m-8 rounded-lg w-[200px] h-[300px] object-cover"
//           src={Images[imageIndex]} />
//         <button onClick={() => {
//           if (imageIndex < Images.length - 1) {
//             setImageIndex(imageIndex + 1)
//           }
//         }}
//           className="bg-orange-400 rounded-full w-8 h-8 text-orange-100">
//           <i className="fa-solid fa-chevron-right"></i>
//         </button>
//       </div>
//     </div>
//   )
// }

// export default App


import CATS from "./cats";
import CatCard from "./CatCard";
import NavButton from "./NavButton";
import { useState } from "react";





const App = () => {

  const [catIdx, setCatIdx] = useState(2);

  return (
    <div className="flex justify-center items-center">
      <NavButton
        icon="fa-chevron-left"
        show={catIdx > 0}
        onClick={() => {
          setCatIdx(catIdx - 1);
        }} />

      <CatCard cat={CATS[catIdx]} />

      <NavButton
        icon="fa-chevron-right"
        show={catIdx < CATS.length - 1}
        onClick={() => {
          setCatIdx(catIdx + 1);
        }}
         />
    </div>
  );
};

export default App
