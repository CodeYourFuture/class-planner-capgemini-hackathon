import React, { useState, useEffect } from "react";
import Week from "./Week";
import "./App.css";

const Home = () => {
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
      {weeks &&
        weeks.map((week, index) => {
          return (
            <div key={index}>
              <Week week={week} />
              {/* <DetailsPage week={week} /> */}
            </div>
          );
        })}
    </div>
  );
};

export default Home;
