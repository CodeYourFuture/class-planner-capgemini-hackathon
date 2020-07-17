import React, { useState } from "react";
import "./Datetime.css";
const Datetime = () => {
  const [start, setStartTime] = useState("");
  const [end, setFinishTime] = useState("");
  const [type, setClassType] = useState("");

  const handleAddNew = () => {
    const body = JSON.stringify({
      start,
      end,
      type,
    });
    fetch("http://localhost:22666/week/1/class", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body,
    })
      .then((res) => res.json())
      .then(() => {
        console.log("Data added");
      });
  };

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
            value={start}
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
            value={end}
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
            value={type}
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
