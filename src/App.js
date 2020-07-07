import React from "react";
import EachWeek from "./EachWeek";
import Break from "./Break";
import "./App.css";

function App() {
  return (
    <div className="App-header">
      <EachWeek
        week="0"
        location="central london"
        date="02-Dec-2019"
        start="11am"
        end="05:30pm"
        subject="Intro"
        subjectP="(There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form,)"
      />
      <Break />
      <EachWeek
        week="1"
        location="central london"
        date="09-Dec-2019"
        start="11am"
        end="07:30pm"
        subject="Intro"
        subjectP="(There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form,)"
      />
      <Break />
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
