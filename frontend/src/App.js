import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Week from "./Week";
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
    <div className="bg-light">
      {console.log(weeks)}
      <Navbar />
      {weeks.map((week, index) => {
        return <Week week={week} key={index} />;
      })}
    </div>
  );
};

export default App;
