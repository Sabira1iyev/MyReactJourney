import "bulma/css/bulma.css";
import { useState } from "react";
import "./App.css";
import Angular from "./images/angular-feature-image-1-1024x512.png";
import Javascript from "./images/download.png";
import Vue from "./images/vue-js-3-fundamentals-with-the-composition-api.jpg";
import React from "./images/react.svg";

import Course from "./Course.jsx";

function App() {
  return (
    <>
      <div className="App">
        <section className="hero is-link">
          <div className="hero-body">
            <p className="title">Kurslarim</p>
          </div>
        </section>

        <div className="container">
          <section className="section">
            <div className="columns">
              <div className="column">
                <Course
                  image={Angular}
                  title="Angular"
                  description="Lorem ipsum dolor sitamet consectetur adipisicing elit. Eveniet perferendis repellendus reiciendis odit et cum doloribus autem commodi aspernatur culpa, in dolorum est magni tempora tenetur laudantium labore error saepe"
                />
              </div>
              <div className="column">
                <Course
                  image={Vue}
                  title="Vue"
                  description="Lorem ipsum dolor sitamet consectetur adipisicing elit. Eveniet perferendis repellendus reiciendis odit et cum doloribus autem commodi aspernatur culpa, in dolorum est magni tempora tenetur laudantium labore error saepe"
                />
              </div>
              <div className="column">
                <Course
                  image={Javascript}
                  title="Javascript"
                  description="Lorem ipsum dolor sitamet consectetur adipisicing elit. Eveniet perferendis repellendus reiciendis odit et cum doloribus autem commodi aspernatur culpa, in dolorum est magni tempora tenetur laudantium labore error saepe"
                />
              </div>
              <div className="column">
                <Course
                  image={React}
                  title="React"
                  description="Lorem ipsum dolor sitamet consectetur adipisicing elit. Eveniet perferendis repellendus reiciendis odit et cum doloribus autem commodi aspernatur culpa, in dolorum est magni tempora tenetur laudantium labore error saepe"
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default App;
