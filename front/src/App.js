import "./App.css";
import axios from 'axios'
import React, { useState } from 'react';

function App() {
  const [message, setMessage] = useState("");
  const [result,setResult] = useState("");
  const [loading,setLoading] = useState(true)

  const handleSubmit = async (event) => {
    event.preventDefault();
    const inputValue = event.target.elements.message.value;
    setMessage(inputValue);
    setLoading(true);
    try {
      console.log(message,"USER MESSAGE")
      const response = await axios.post('http://localhost:8000', { data: message });
      while (!response.data) {
        await new Promise(resolve => setTimeout(resolve, 10000)); // wait 1 second before checking again
      }
      setResult(response.data);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };
  // console.log(result)

  return (
    <div className="App">
      <h1>YOUR VERY OWN CHATGPT INTEGRATION</h1>
      <form onSubmit={handleSubmit} action="">
        <input type="text" name="message"/>
        <button type="submit">Get</button>
      </form>
      <p>{message}</p>
      {loading && <div>Loading...</div>}
      {result && <div>{result}</div>}
    </div>
  );
}

export default App;

