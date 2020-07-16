import React, { useState } from "react";
import  "./Datetime.css";
const Datetime = () => {
  const [startTime, setStartTime] = useState("");
  const [finishTime, setFinishTime] = useState("");
  const [classType, setClassType] = useState("");

  const handleAddNew = () => {
    
    fetch("https://hackathon-procject.glitch.me/week/1/class", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        start: startTime,
        finish: finishTime,
        type: classType,
      })
    })
      .then((res) => res.json())
      .then(() => {
        console.log("Data added");
      });
  };
console.log(startTime);
  return (
    <form onSubmit={handleAddNew} className="form-datetime">
      <h3>Time and Class Type</h3>
      <div className="start-time">
        <div>
          <label>Start Time:</label>
        </div>
        <div>
          <input
            onChange={(event) => setStartTime(event.target.value)}
            type="text"
            value={startTime}
          />
        </div>
      </div>
      <div className="finish-time">
        <div>
          <label>Finish Time:</label>
        </div>
        <div>
          <input
            onChange={(event) => setFinishTime(event.target.value)}
            type="text"
            value={finishTime}
          />
        </div>
      </div>
      <div className="class-type">
        <div>
          <label>Class Type:</label>
        </div>
        <div>
          <input
            onChange={(event) => setClassType(event.target.value)}
            type="text"
            value={classType}
          />
        </div>
      </div>
      <div className="date-time-btn">
        <button className="btn-date-time" type="submit">
          Add to Timetable
        </button>
      </div>
    </form>
  );
};
export default Datetime;
