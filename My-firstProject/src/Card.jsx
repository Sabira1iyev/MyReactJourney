import React from 'react'
import { useState } from 'react';

const Card = ({ title }) => {

      const [hasLiked, setHasLiked] = useState(false);
    return (
        <div className="card">
            <h2>{title}</h2>

            <button onClick={() => setHasLiked(!hasLiked)}>
                {hasLiked ? 'liked' : 'like'}
            </button>
        </div>
    )
}

export default Card
