
import React, { useState } from 'react';
import ComponentB from "./ComponentB.jsx";

function ComponentA() {

    const [user, setUser] = useState("Aliyevv");

    return (
        <div className="box">
            <h1>ComponentA</h1>
            <h2>{`hello ${user}`}</h2>
            <ComponentB user={user} />
        </div>
    )
}

export default ComponentA;