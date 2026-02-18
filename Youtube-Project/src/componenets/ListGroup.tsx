// import { Fragment } from 'react';
// import type { MouseEvent } from "react";

import { useState } from "react";

function ListGroup() {
  let items = ["New York", "San Fransisco", "Tokyo", "London", "Paris"];

  // const message = items.length === 0 ? <p>No item found</p> : null

  // const getMessage = () => {
  //   return;
  // }

  //Event handler
  // const handleClick = (event: MouseEvent) => console.log(event);


  const [selectedIndex, setselectedIndex] = useState(-1)


  return (
    <>
      <h1>List</h1>
      {/* {items.length === 0 ? <p>No item found</p> : null} */}

      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {setselectedIndex(index);}}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
