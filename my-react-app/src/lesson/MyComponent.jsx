// import React, { useState } from 'react';


// function MyComponent() {

//     const [name, setName] = useState("Guest");
//     const [age, setAge] = useState(0);
//     const [isEmployed, setIsEmployed] = useState(false);

//     const updateName = () => {
//         setName("Spongebob");
//     }
//     const inrcementAge = () => {
//         setAge(age + 2);
//     }

//     const toggleEmployedStatus = () =>{
//         setIsEmployed(!isEmployed);
//     }

//     return (
//         <div>
//             <p>Name: {name}</p>
//             <button onClick={updateName}>Set Name</button>

//             <p>Age: {age}</p>
//             <button onClick={inrcementAge}>inrcementAge </button>

//             <p>Is employed: {isEmployed ? "Yes" : "No"}</p>
//             <button onClick={toggleEmployedStatus}>Toggle status</button>
//         </div>);
// }

// export default MyComponent

// function MyComponent() {
//     const [name, setName] = useState("Guest");
//     const [quantity, setQuantity] = useState();
//     const [comment, setComment] = useState("");
//     const [payment, setPayment] = useState("");
//     const [shipping, setShipping] = useState("");

//     function handleNameChange(event) {
//         setName(event.target.value)
//     }

//     function handleQuantityChange(event) {
//         setQuantity(event.target.value);
//     }

//     function handleCommentChange(event) {
//         setComment(event.target.value);
//     }

//     function handlePaymentChange(event) {
//         setPayment(event.target.value)
//     }

//     function handdleShippingChange(event) {
//         setShipping(event.target.value);
//     }

//     return (<div>
//         <input value={name} onChange={handleNameChange} />
//         <p>Name: {name}</p>

//         <input value={quantity} onChange={handleQuantityChange} type="number" />
//         <p>Quantity: {quantity}</p>

//         <textarea value={comment} onChange={handleCommentChange} placeholder="Enter delivery instructions" />
//         <p>Comment: {comment}</p>

//         <select value={payment} onChange={handlePaymentChange}>
//             <option value="">Select an option</option>
//             <option value="Visa">Visa</option>
//             <option value="Mastercard">Mastercard</option>
//             <option value="Giftcard">Giftcard</option>
//         </select>
//         <p>Payment: {payment}</p>


//         <label>
//             <input type="radio" value="Pick Up"
//                 checked={shipping === "Pick Up"} onChange={handdleShippingChange} />
//             Pick Up
//         </label><br/>
//         <label>
//             <input type="radio" value="Delivery"
//                 checked={shipping === "Delivery"} onChange={handdleShippingChange} />
//             Delivery
//         </label>
//         <p>Shipping: {shipping}</p>
//     </div>);
// }

// export default MyComponent


// ------------------

// updater functions

// import React, { useState } from 'react';

// function MyComponent() {
//     const [count, setCount] = useState(0);

//     function increment() {
//         setCount(c => c + 1);
//         setCount(c => c + 1);
//         setCount(c => c + 1);
//     };
//     function decrement() {
//         setCount(c => c - 1);
//         setCount(c => c - 1);
//         setCount(c => c - 1);
//     }
// }
// function reset() {
//     setCount(c => c = 0);
// }

// return (
//     <div>
//         <p>count: {count}</p>
//         <button onClick={decrement}>decrement</button>
//         <button onClick={increment}>increment</button>
//         <button onClick={reset}>reset</button>

//     </div>
// )

//Updater funtions
// import React, { useState } from 'react';

// function MyComponent() {

//     const [car, setCar] = useState({
//         year: 2025,
//         make: "Ford",
//         model: "Mustang"
//     });

//     function handleYearChange(event) {
//         setCar(c => ({ ...c, year: event.target.value }));
//     }
//     function handleMakeChange(event) {
//         setCar(c => ({ ...c, make: event.target.value }));
//     }
//     function handleModelChange(event) {
//         setCar(c =>({...c, model: event.target.value}));
//     }
//     return (<div>
//         <p>Your favorite car is: {car.year} {car.make} {car.model}</p>

//         <input type="number" value={car.year} onChange={handleYearChange} /><br />
//         <input type="text" value={car.make} onChange={handleMakeChange} /><br />
//         <input type="text" value={car.model} onChange={handleModelChange} /><br />

//     </div>);
// }

// export default MyComponent


// Update arrays in useState
// import React, { useState } from 'react';

// function MyComponent() {

//     const [foods, setFoods] = useState(["Apple", "Orange", "Banana"]);

//     function handleAddFood() {
//         const newFood = document.getElementById("foodInput").value;
//         document.getElementById("foodInput").value = "";

//         setFoods(f => [...f, newFood]);
//     }

//     function handleRemoveFood(index) {
//         setFoods(foods.filter((_, i) => i !== index));
//     }

//     return (
//         <div>
//             <h2>List of food</h2>
//             <ul>
//                 {foods.map((food, index) => <li key=
//                     {index} onClick={() => handleRemoveFood(index)}>
//                     {food}
//                 </li>)}
//             </ul>
//             <input type="text" id="foodInput" placeholder='enter food name' />
//             <button onClick={handleAddFood}>Add Food</button>
//         </div>);
// }
// export default MyComponent



// import React, { useState } from 'react';

// function MyComponent() {

//     const [cars, setCar] = useState([]);
//     const [carYear, setCarYear] = useState(new Date().getFullYear());
//     const [carMake, setCarMake] = useState("");
//     const [carModel, setCarModel] = useState("");

//     function handleAddCar() {
//         const newCar = {year: carYear, 
//                         make:carMake, 
//                         model:carModel};

//         setCar(c => [...c, newCar])

//         setCarYear(new Date().getFullYear());
//         setCarMake("");
//         setCarModel("");
//     }

//     function handleRemoveCar(index) {
//         setCar(c => c.filter((_, i) => i !== index));
//     }

//     function handleYearChange(event) {
//         setCarYear(event.target.value);
//     }

//     function handleMakeChange(event) {
//         setCarMake(event.target.value);
//     }

//     function handleModelChange(event) {
//         setCarModel(event.target.value);
//     }

//     return (
//         <div>
//             <h2>List of Car objects: </h2>
//             <ul>
//                 {cars.map((car,index) =>
//                 <li key={index} onClick={() => handleRemoveCar(index)}>
//                     {car.year} {car.make} {car.model}
//                 </li>)};
//             </ul>

//             <input type="number" value={carYear} onChange={handleYearChange} /><br />
//             <input type="text" value={carMake} onChange={handleMakeChange}
//                 placeholder="Enter car make" /><br />
//             <input type="text" value={carModel} onChange={handleModelChange}
//                 placeholder="Enter car model" /><br />
//             <button onClick={handleAddCar}>Add Car</button>
//         </div>
//     )

// }
// export default MyComponent


// import React, { useState, useEffect } from 'react';

// function MyComponent() {

//     // const [count, setCount] = useState(0);
//     // const [color, setColor] = useState("green");



//     // useEffect(() => {
//     //     document.title = `Count: ${count} ${color}`;
//     // }, [count, color]);


//     // function addCount() {
//     //     setCount(c => c + 1);
//     // }

//     // function subtractCount() {
//     //     setCount(c => c - 1);
//     // }

//     // function changeColor(){
//     //     setColor(c =>c === "green" ? "red" : "green");
//     // }



//     // return (
//     //     <>
//     //         <p style={{color:color}}> Count:{count}</p>
//     //         <button onClick={addCount}>add</button>
//     //         <button onClick={subtractCount}>subtract</button><br />
//     //         <button onClick={changeColor}>change the color</button>
//     //     </>
//     // )

//     const [width, setWidth] = useState(window.innerWidth);
//     const [height, setHeight] = useState(window.innerHeight);
//     useEffect(() => {
//     window.addEventListener("resize", handleResize);
//     console.log("EVENT LISTENER ADDED");

//     return () =>{
//         window.removeEventListener("resize", handleResize);
//         console.log("EVENT LISTENER REMOVED");
//     }
//     }, []);

//     useEffect(() =>{
//         document.title = `Size ${width} x ${height}`;
//     }, [width, height]);

//     function handleResize(){
//         setWidth(window.innerWidth);
//         setHeight(window.innerHeight);
//     }

//     return(<>

//         <p>Window Width: {width}</p>
//         <p>Window heigh: {height}</p>
//     </>)

// }
// export default MyComponent


// useRef


import React, { useState, useEffect, useRef } from 'react';

function MyComponent() {

    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);
    const inputRef3 = useRef(null);


    useEffect(() => {
        console.log("COMPONENT RENDERED");
    });

    function handleClick1() {
        inputRef1.current.focus();
        inputRef1.current.style.backgroundColor = "yellow";
        inputRef2.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "";


    }

    function handleClick2() {
        inputRef2.current.focus();
        inputRef1.current.style.backgroundColor = "";
        inputRef2.current.style.backgroundColor = "yellow";
        inputRef3.current.style.backgroundColor = "";

    }

    function handleClick3() {
        inputRef3.current.focus();
        inputRef1.current.style.backgroundColor = "";
        inputRef2.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "yellow";

    }

    return (
        <div>
            <button onClick={handleClick1}>
                click me 1
            </button>
            <input ref={inputRef1} />

            <button onClick={handleClick2}>
                click me 2
            </button>
            <input ref={inputRef2} />

            <button onClick={handleClick3}>
                click me 3
            </button>
            <input ref={inputRef3} />

        </div>
    )
}

export default MyComponent;