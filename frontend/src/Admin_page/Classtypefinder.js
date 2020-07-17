import React, { useState} from "react";
import "./Datetime.css";


const Classtypefinder = () => {
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [type, setType] = useState("");

  const handleSubmit = () => {
    const body = JSON.stringify({
      start,
      end,
      type,
    });
    fetch("http://localhost:22666/week/1/class", {
      method: "GET",
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
    <form onSubmit={handleSubmit} className="form-datetime">
      <h3>Class Type Finder</h3>
      <div className="start-time">
        <div>
          <label>Start Time:</label>
        </div>
        <div>
          <input
            onChange={(event) => setStart(event.target.value)}
            type="search"
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
            onChange={(event) => setEnd(event.target.value)}
            type="search"
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
            onChange={(event) => setType(event.target.value)}
            type="search"
            value={type}
          />
        </div>
      </div>
      <div className="date-time-btn">
        <button className="btn-date-time" type="submit">
          Find
        </button>
      </div>
    </form>
  );
};
export default Classtypefinder;
