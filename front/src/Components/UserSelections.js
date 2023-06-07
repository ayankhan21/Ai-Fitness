import React, { useState, useEffect } from "react";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";

function UserSelections({ message, setMessage, topic, topics }) {
  const [selections, setSelections] = useState([]);
  const [formats, setFormats] = useState(["bold", "italic"]);

  useEffect(() => {
    setMessage(message + " " +  selections);
  }, [selections]);

  const handleFormat = (event, newFormats) => {
    setFormats(newFormats);

    if (selections.includes(event.target.value)) {
      setSelections((prevSelections) =>
        prevSelections.filter((e) => e !== event.target.value)
      );
    } else {
      setSelections((prevSelections) => [
        topic,
        ...prevSelections,
        event.target.value,
      ]);
    }
  };

  const handleReset = () => {
    setSelections([]);
    setFormats(["bold", "italic"]);
  };

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
          <ToggleButton className="option" key={e} value={e} aria-label="italic">
            {e}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    </div>
  );
}

export default UserSelections;
