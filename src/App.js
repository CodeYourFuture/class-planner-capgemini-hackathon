import React from "react";
import EachWeek from "./EachWeek";
import "./App.css";

function App() {
  return (
    <div className="App-header">
      <button className="edit-button">Edit</button>
      <EachWeek
        week="0"
        location="central london"
        date="02-Dec-2019"
        start="11am"
        end="05:30pm"
        subject="Intro"
        subjectP="(There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form,)"
      />
      <div className="holiday">
        <p>Bank Holiday</p>
        <p>23-Dec</p>
      </div>
      <EachWeek
        week="1"
        location="central london"
        date="09-Dec-2019"
        start="11am"
        end="07:30pm"
        subject="Intro"
        subjectP="(There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form,)"
      />
      <EachWeek
        week="2"
        date="016-Dec-2019"
        start="11am"
        end="07:30pm"
        subject="JS Core 1"
      />
    </div>
  );
}

export default App;
