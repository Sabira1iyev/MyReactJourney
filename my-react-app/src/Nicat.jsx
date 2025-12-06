import { useEffect, useState } from "react";

function Nicat(){

    // const [name, setName] = useState("");
    const [time, setTime] = useState(0);
    const[color,setColor] = useState();

    function calculate(second){
        return Math.floor(second / 60);

    }


    useEffect(() => {
        const interval = setInterval(() => {
        setColor((prev) => prev === "red" ? "green" : "red");
            setTime((prev) => prev + 1);
        }, 1000)

        return () => clearInterval(interval)
    }, [])

        function handleReset(){
            setTime(0);
    }
    // const handleT = (event) => {
    //     setName(event.target.value);
    // }

return(
    // <input type="text" placeholder="Enter name" value={name} onChange={handleChange} />
    <>
    <p style={{ color }}>time: {time} </p>
    <button onClick={handleReset}>Reset</button>
    <p>{calculate(time)}</p>
    </>
)
}

export default Nicat;