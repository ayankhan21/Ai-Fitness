import React, { useState, useEffect } from "react";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";

function UserSelections({ message, setMessage, topic, topics }) {
  const [selections, setSelections] = useState([...topic]);
  const [formats, setFormats] = useState(["bold", "italic"]);


  // const handleFormat = (event, newFormats) => {
  //   setFormats(newFormats);

  //   if (selections.includes(event.target.value)) {
  //     setSelections((prevSelections) =>
  //       prevSelections.filter((e) => e !== event.target.value)
  //     );
  //   } else {
  //     setSelections((prevSelections) => [
  //       topic,
  //       ...prevSelections,
  //       event.target.value,
  //     ]);
  //   }
  // };
  // useEffect(() => {
  //   setMessage(...message,...selections);
  // }, [selections]);

  // const handleFormat = (event, newFormats) => {
  //   setFormats(newFormats);

  //   if (selections.includes(event.target.value)) {
  //     setSelections((prevSelections) =>
  //       prevSelections.filter((e) => e !== event.target.value)
  //     );
  //     // setMessage(message.replace(event.target.value, "").trim());
  //     setMessage((prevMessage) => {
  //       const updatedMessage = prevMessage
  //         .split(" ")
  //         .filter((value) => value !== event.target.value)
  //         .join(" ");
  //       return updatedMessage.trim();
  //     });
  //   } else {
  //     setSelections((prevSelections) => [
  //       topic,
  //       ...prevSelections,
  //       event.target.value,
  //     ]);
  //     setMessage(message + " " + event.target.value);
  //   }
  // };

  const handleFormat = (event, newFormats) => {
    setFormats(newFormats);
  
    if (selections.includes(event.target.value)) {
      setSelections((prevSelections) =>
        prevSelections.filter((e) => e !== event.target.value)
      );
      setMessage((prevMessage) =>
        prevMessage.filter((value) => value !== event.target.value)
      );
    } else {
      setSelections((prevSelections) => [
        topic,
        ...prevSelections,
        event.target.value,
      ]);
      setMessage((prevMessage) => [...prevMessage, event.target.value]);
    }
  };
  

  // Rest of your component code...


  return (
    <div className="options">
      <h2>{topic}</h2>
      <ToggleButtonGroup
        color="primary"
        value={formats}
        onChange={handleFormat}
        aria-label="text formatting"
        className="selections"
      >
        {topics.map((e) => (
          <ToggleButton
            className="option"
            key={e}
            value={e}
            aria-label="italic"
          >
            {e}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    </div>
  );
}

export default UserSelections;
