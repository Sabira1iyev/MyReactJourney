import { useState } from "react";
import "./App.css";

import Course from "./Course.jsx";

function App() {
  return (
    <>
      <div className="App">
        <Course
          title="Angular"
          description="Lorem ipsum dolor sitamet consectetur adipisicing elit. Eveniet perferendis repellendus reiciendis odit et cum doloribus autem commodi aspernatur culpa, in dolorum est magni tempora tenetur laudantium labore error saepe"
        />
        <Course
          title="Bootstrap"
          description="Lorem ipsum dolor sitamet consectetur adipisicing elit. Eveniet perferendis repellendus reiciendis odit et cum doloribus autem commodi aspernatur culpa, in dolorum est magni tempora tenetur laudantium labore error saepe"
        />
        <Course
          title="Komple web"
          description="Lorem ipsum dolor sitamet consectetur adipisicing elit. Eveniet perferendis repellendus reiciendis odit et cum doloribus autem commodi aspernatur culpa, in dolorum est magni tempora tenetur laudantium labore error saepe"
        />
        <Course
          title="Frontend"
          description="Lorem ipsum dolor sitamet consectetur adipisicing elit. Eveniet perferendis repellendus reiciendis odit et cum doloribus autem commodi aspernatur culpa, in dolorum est magni tempora tenetur laudantium labore error saepe"
        />
      </div>
    </>
  );
}

export default App;
