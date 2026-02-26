import { useState } from "react";
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

const MyComponent = (props) => {
  const { children } = props;
  return (
    <div>
      <div>this is my component</div>
      <div>{children}</div>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <MyComponent>Hello Sabir</MyComponent>
      <MyComponent>Goodbye</MyComponent>
    </div>
  );
};

export default App;
