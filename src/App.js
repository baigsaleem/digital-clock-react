import React, { useState } from "react";
import "./App.css";

const App = () => {

  let currTime = new Date().toLocaleTimeString();
  let currDate = new Date().toLocaleDateString();

  //Using useState for increment value on button click
  //useState(0) holds the initial value zero
  //count has the current value
  //setCount is a function and it has the updated value after clicking of the button
  const [time, setTime] = useState(currTime);

  const GetTime = () => {
    currTime = new Date().toLocaleTimeString();
    setTime(currTime);
  }

  const [date, setDate] = useState(currDate);

  const GetDate = () => {
    currDate = new Date().toLocaleDateString();
    setDate(currDate);
  }

  //setinterval calls the GetTime function every sec which hence updates the time
  setInterval(GetTime, 1000);

  setInterval(GetDate, 86400000)
  return (
    <>
      <div className="div">
        <h1 className='h1'>⌚ {time} ⌚</h1>
        <br />
        <h2 className='h2'>📅 {date} 📅</h2>
      </div>
    </>
  )
}

export default App;