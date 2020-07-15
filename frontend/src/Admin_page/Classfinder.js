import React, { useState, useEffect } from "react";
import "./Datetime.css";
const Datetime = () => {
  const [startTime, setStartTime] = useState("");
  const [finishTime, setFinishTime] = useState("");
  const [classType, setClassType] = useState("");

  const handleAddNew = () => {
    const body = JSON.stringify({
      startTime,
      finishTime,
      classType,
    });
    fetch("http://localhost:22666/", {
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
    <form className="form-datetime">
      <div>
        <label>Start Time:</label>
        <input
          onChange={(event) => setStartTime(event.target.value)}
          type="text"
          value={startTime}
        />
      </div>
      <div>
        <label>Finish Time:</label>
        <input
          onChange={(event) => setFinishTime(event.target.value)}
          type="text"
          value={finishTime}
        />
      </div>
      <div>
        <label>Class Type:</label>
        <input
          onChange={(event) => setClassType(event.target.value)}
          type="text"
          value={classType}
        />
      </div>
      <button className="btn-date-time" type="submit">
        Add to Timetable
      </button>
    </form>
  );
};
export default Datetime;
