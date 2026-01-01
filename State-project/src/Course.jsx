import Angular from "./images/angular-feature-image-1-1024x512.png";
import React from "./images/react.svg";
import Vue from "./images/vue-js-3-fundamentals-with-the-composition-api.jpg";
import Javascript from "./images/download.png";
import './Course.css';

const courseMap = {
  Angular,
  React,
  Vue,
  Javascript,
}; 

function Course({ courseName }) {
  // console.log(courseName);
  console.log(courseMap[courseName]);
  return (
    <div className="course-div">
      <img className="course" src={courseMap[courseName]} alt="course" />
    </div>
  );
}

export default Course;
