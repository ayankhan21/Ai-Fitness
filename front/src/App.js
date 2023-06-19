import "./App.css";
import axios from "axios";
import React, { useState, lazy, Suspense } from "react";

import "./App.css";

const UserSelections = lazy(() => import("./Components/UserSelections"));
const GifDisplay = lazy(() => import("./Components/GifsDisplay"));
const Intro = lazy(() => import("./Components/Intro"));
const Loading = lazy(() => import("./Components/Loading"));

function App() {
  const [message, setMessage] = useState([]);
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(null);
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


  const handleSubmit = async (event) => {
    event.preventDefault();
    if (message === "") {
      setMessage("Please select a workout");
    } else {
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
    }
  };


  const startsWithNumber = (str) => {
    return /^\d/.test(str);
  };

  const highlightYouTubeLinks = (text) => {
    const linkRegex = /(https?:\/\/(?:www\.)?youtube\.com\/watch\?v=[\w-]+)/gi;
    return text.replace(linkRegex, (match) => {
      return `<a href="${match}" target="_blank" rel="noopener noreferrer">${match}</a>`;
    });
  };

  const renderResult = () => {
    const paragraphs = result.split("\n");
    const resultElements = paragraphs.map((paragraph, index) => {
      if (startsWithNumber(paragraph)) {
        return (
          <div className="exercise-name" key={index}>
            <strong>{paragraph}</strong>
          </div>
        );
      } else {
        const highlightedParagraph = highlightYouTubeLinks(paragraph);
        return (
          <p
            key={index}
            dangerouslySetInnerHTML={{ __html: highlightedParagraph }}
          />
        );
      }
    });
    return resultElements;
  };

  return (
    <div className="main">
      <Suspense fallback={<div>Loading...</div>}>
        <Intro />
        {message && <p>{message}</p>}
        <div className="selections">
          <UserSelections
            topic={"WORKOUT TYPE"}
            setMessage={setMessage}
            message={message}
            topics={workoutType}
          />
          <UserSelections
            topic={"FITNESS LEVEL"}
            setMessage={setMessage}
            message={message}
            topics={level}
          />
          <UserSelections
            topic={"MUSCLE GROUP"}
            setMessage={setMessage}
            message={message}
            topics={muscle}
          />
          <UserSelections
            topic={"DURATION"}
            setMessage={setMessage}
            message={message}
            topics={duration}
          />
          <UserSelections
            topic={"EQUIPMENT"}
            setMessage={setMessage}
            message={message}
            topics={equipment}
          />

          <UserSelections
            topic={"INTENSITY"}
            setMessage={setMessage}
            message={message}
            topics={intensity}
          />
        </div>
        <button className="get" onClick={handleSubmit} type="button">
          Generate
        </button>
        {loading && (
          <div>
            <Loading />
          </div>
        )}
        {result && <div className="result">{renderResult()}</div>}
        {/* <GifDisplay message={message} /> */}
      </Suspense>
    </div>
  );
}

export default App;
