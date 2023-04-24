import "./App.css";
import axios from 'axios'
import React, { useState, useEffect } from 'react';
import UserSelections from "./Components/UserSelections";


function App() {
  const [message, setMessage] = useState("");
  const [result,setResult] = useState("");
  const [loading,setLoading] = useState(null)
  const [topic1,setTopic1] = useState(['JavaScript','Python','Java','C++','Swift']);
  const [topc2,setTopic2] = useState(['Counter','Stop Watch','Fibonacci'])

  useEffect(()=>{
      
  },[message])


  const handleMessage = (e)=>{
      setMessage(e.target.value)
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    // const inputValue = event.target.elements.message.value;
    // setMessage(inputValue);
    setLoading(true);
    try {
      console.log(message,"USER MESSAGE")
      const response = await axios.post('http://localhost:8000', { data: message });
      setResult(response.data);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  

  return (
    <div className="App">
      <h1>YOUR VERY OWN CHATGPT INTEGRATION</h1>
      <UserSelections topic={'FIRST'} topics = {topic1}  />
      <UserSelections topic={'SECOND'} topics={topc2} />
      {/* <UserSelections topic={'THIRD'} />
      <UserSelections topic={'FOURTH'} />
      <UserSelections topic={'FIFTH'} /> */}
      <form onSubmit={handleSubmit} action="">
        <input type="text" onChange={handleMessage} name="message"/>
        <button  type="submit">Get</button>
      </form>
      <p>{message}</p>
      {loading && <div>Loading...</div>}
      {result && <div>{result}</div>}
    </div>
  );
}

export default App;

