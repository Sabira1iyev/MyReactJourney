import React, {useState} from 'react';

function myComponent(){

    const[name, setName] = useState();

    return( <div>
            <p>Name: </p>
    </div>);
}

export default myComponent