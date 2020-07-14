import React, { useState, useEffect } from "react";
import EachWeek from "./EachWeek";
import "./App.css";

const App = () => {
  const [weeks, setWeeks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:22666/week")
      .then((res) => res.json())
      .then((data) => {
        setWeeks(data);
      });
  }, []);

  return (
    <div className="App-header">
      <h1>Code Your Future Class Planner</h1>
      <button className="edit-button">Edit Week/Add Week</button>
      <EachWeek props={weeks} />
      <div className="holiday">
        <p>Bank Holiday</p>
        <p>23-Dec</p>
      </div>
    </div>
  );
};

export default App;
