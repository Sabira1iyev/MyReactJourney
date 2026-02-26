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


const App = () => {
  return (
    <div>
      {/* 
      <div className="text-rose-300 bg-red-500">one</div>
      <div className="text-slate-300 border-2 border-slate-600">two</div>
      <div className="text-2xl bg-emerald-200 text-blue-600">three</div>

      <div className="text-xl text-purple-500">
        <div className="border-4 border-sky-500">four</div>
        <div className="bg-violet-200 border-l-8 border-purple-800">five</div>
        * <div className="text-red-500">six</div> *
      </div> */}
      <div className="text-3xl">
        <div className="text-red-300 bg-amber-400 border-r-4 border-green-500">one</div>
        <div className="text-5xl text-pink-600 border-y-4 border-blue-700">two</div>
        <div className="text-green border-y-8 border-violet-700">three</div>
      </div>

    </div>
  )
}

export default App