import React, { useState, useEffect } from "react";
import HomeNavbar from "./HomeNavbar";
import Week from "./Week";
import "./App.css";
// import ClassTimeAndType from "./Step-4-Alisina/ClassTimeAndType";

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
      <HomeNavbar />
      {/* <ClassTimeAndType /> */}
      {weeks &&
        weeks.map((week, index) => {
          return (
            <div key={index}>
              <Week week={week} />
            </div>
          );
        })}
    </div>
  );
};

export default Home;
