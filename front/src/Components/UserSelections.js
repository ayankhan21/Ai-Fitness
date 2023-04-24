import React, { useState } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

function UserSelections(props) {
  const [selections, setSelections] = useState([]);
  const [formats, setFormats] = useState(['bold', 'italic']);
  
    const handleFormat = (event, newFormats) => {
        setFormats(newFormats);
        if(selections.includes(event.target.value)){
            setSelections(selections.filter((e)=>e !== event.target.value))
        }else{
            setSelections([...selections,event.target.value])
        }
      };

  return (
    <div className="options">
    <h2>{props.topic}</h2>
      <ToggleButtonGroup
      color="primary"
      value={formats}
      onChange={handleFormat}
      aria-label="text formatting">
        {/* <ToggleButton value="hello1" aria-label="bold">
          hello 1
        </ToggleButton>
        <ToggleButton value="hello2" aria-label="italic">
          hello 2
        </ToggleButton>
        <ToggleButton value="hello3" aria-label="underlined">
          hello 3
        </ToggleButton>
        <ToggleButton value="hello4" aria-label="color" >
          hello 4
        </ToggleButton> */}
        {
            props.topics.map((e)=>{
                return(<ToggleButton value={e} aria-label="italic">
          {e}
        </ToggleButton>)
            })
        }
      </ToggleButtonGroup>
      {selections.map((e)=>{
        return <p>{e}</p>
      })}
    </div>
  );
}

export default UserSelections;
