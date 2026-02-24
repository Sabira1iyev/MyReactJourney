import React, { useEffect, useState } from 'react'


const Card = ({ title }) => {


    const [count, setCount] = useState(0);
    const [hasLiked, setHasLiked] = useState(false);

    useEffect(() => {
        console.log(`${title} has been liked: ${hasLiked}`);
    }, [hasLiked]);
 
    return (
        <div className="card" onClick={() => setCount(count + 1)}>
            <h2>{title} <br /> {count}</h2>

            <button onClick={() => setHasLiked(!hasLiked)}>
                {hasLiked ? 'liked' : 'like'}
            </button>
        </div>
    )
}

export default Card
