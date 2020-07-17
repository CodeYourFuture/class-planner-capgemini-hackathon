import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Week from "./Week";
import SignUp from "./SignUp";
import DetailsPage from "./DetailsPage";
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
    <div>
      {/* {console.log(weeks)} */}
      <Navbar />
      <SignUp />
      {weeks &&
        weeks.map((week, index) => {
          return (
            <div key={index}>
              <Week week={week} />
              <DetailsPage week={week} />
            </div>
          );
        })}
    </div>
  );
};

export default App;
