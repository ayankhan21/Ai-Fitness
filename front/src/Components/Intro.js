import React from "react";
import "../App.css";
import arrow from "../assets/icons8-down-unscreen.gif";
const Intro = () => {
  return (
    <div className="intro">
      <h1>Ai Fitness</h1>
      <div className="text">
        <p>Transform your workouts with AI fitness.</p>
        <p>
          Answer a questionnaire and get personalized workouts based on your
          fitness level, goals, and equipment.
        </p>
        <p>Experience fitness redefined.</p>
      </div>
      <img src={arrow} alt="" />
    </div>
  );
};

export default Intro;
