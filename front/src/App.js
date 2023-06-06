import "./App.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import UserSelections from "./Components/UserSelections";
import GifDisplay from "./Components/GifsDisplay";
import Intro from "./Components/Intro";
import Loading from "./Components/Loading";

function App() {
  const [message, setMessage] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(null);
  const [reset, setReset] = useState(false);
  const level = ["Beginner", "Intermediate", "Advanced"];
  const muscle = ["CHEST", "BACK", "SHOULDERS", "LEGS", "ABS", "ARMS"];
  const duration = [
    "Short (15-20 minutes)",
    "Meduim (30-45 minutes)",
    "Long (45+ minutes) ",
  ];
  const equipment = [
    "None (Body weight)",
    "Dumbbells",
    "Barbell",
    "Resistance Bands",
    "Kettle bell",
    "Cable Machine",
    "Complete Gym",
  ];
  const workoutType = [
    "Cardio",
    "Strength Training",
    "Weigth Training",
    "Yoga",
    "Pilates",
  ];
  const intensity = ["Low intensity", "Medium intensity ", "High intensity"];

  useEffect(() => {
    console.log(message);
  }, [message]);

  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      console.log(message, "USER MESSAGE");
      const response = await axios.post("http://localhost:8000", {
        data: message,
      });
      setResult(response.data);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  const handleReset = () => {
    setReset(!reset);
  };

  const startsWithNumber = (str) => {
    return /^\d/.test(str);
  };

  return (
    <div className="main">
      <Intro/>
      <UserSelections
        topic={"WORKOUT TYPE"}
        setMessage={setMessage}
        message={message}
        topics={workoutType}
        reset={reset}
      />
      <UserSelections
        topic={"FITNESS LEVEL"}
        setMessage={setMessage}
        message={message}
        topics={level}
        reset={reset}
      />
      <UserSelections
        topic={"MUSCLE GROUP"}
        setMessage={setMessage}
        message={message}
        topics={muscle}
        reset={reset}
      />
      <UserSelections
        topic={"DURATION"}
        setMessage={setMessage}
        message={message}
        topics={duration}
        reset={reset}
      />
      <UserSelections
        topic={"EQUIPMENT"}
        setMessage={setMessage}
        message={message}
        topics={equipment}
        reset={reset}
      />
      
      <UserSelections
        topic={"INTENSITY"}
        setMessage={setMessage}
        message={message}
        topics={intensity}
        reset={reset}
      />
      {/* <button onClick={handleReset}>Reset</button> */}
        <button onClick={handleSubmit} type="submit">Get</button>
      <p>{message}</p>
      {loading && <div>
        <Loading/>
      </div>}
      {result && (
        <div className="result">
          {result.split("\n").map((paragraph, index) => {
            if (startsWithNumber(paragraph)) {
              return (
                <div className="exercise-name" key={index}>
                  <strong>{paragraph}</strong>
                </div>
              );
            } else {
              return <p key={index}>{paragraph}</p>;
            }
          })}
        </div>
      )}
      {/* <GifDisplay message={message} /> */}
    </div>
  );
}

export default App;
