import React, { useState, useEffect } from "react";
import EachWeek from "./EachWeek";
import "./App.css";
import "./Week.css";
import Datetime from "./Admin_page/Datetime"
import Classtypefinder from "./Admin_page/Classtypefinder";
import Editdelete from "./Admin_page/Editdelete";

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
      <Datetime/>
      <Classtypefinder/>
      <Editdelete/>
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
