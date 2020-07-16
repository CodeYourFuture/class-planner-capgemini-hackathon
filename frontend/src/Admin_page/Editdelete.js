import React, { useState, useEffect } from "react";
import "./Datetime.css";

const Editdelete = () => {
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
    <form onSubmit={handleAddNew} className="form-datetime">
      <h3>Edit/Delete</h3>
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
          Save Changes
        </button>
        <button className="btn-date-time-delete" type="submit">
          Delete
        </button>
      </div>
    </form>
  );
};
export default Editdelete;
