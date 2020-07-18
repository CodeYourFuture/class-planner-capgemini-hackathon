import React, { useState, useEffect } from "react";

import style from "./find.module.css";
import EditDelete from "./EditDelete";

const Find = () => {
  const [week, setWeek] = useState("");
  const [weekList, setWeekList] = useState([]);

  const [addedWeekLocation, setAddedWeekLocation] = useState("");
  const [addedTime, setAddedTime] = useState("");
  const [addedDate, setAddedDate] = useState("");
  const [addedSubject, setAddedSubject] = useState("");
  const [addedWeek, setAddedWeek] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    fetch(`http://localhost:22666/week/${week}`, { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        setAddedWeekLocation(data.location);
        setAddedDate(data.date);
        setAddedTime(data.time);
        setAddedSubject(data.subject);
        setAddedWeek(data.week);
      });
  }

  return (
    <div className={style.find}>
      <p>Week Finder</p>
      <div className="row search-wrapper">
        <div className="col">
          <form className={style.form} onSubmit={handleSubmit}>
            <label htmlFor="week">Week</label>
            <input
              type="number"
              id="week"
              name="week"
              placeholder="week number"
              value={weekList}
              onChange={(e) => setWeekList(e.target.value)}
            />

            <div>
              <input type="submit" value="find" />
            </div>
          </form>
          <div>
            {" "}
            <EditDelete
              setAddedWeekLocation={setAddedWeekLocation}
              setAddedDate={setAddedDate}
              setAddedTime={setAddedTime}
              setAddedSubject={setAddedSubject}
              setAddedWeek={setAddedWeek}
              addedTime={addedTime}
              addedDate={addedDate}
              addedSubject={addedSubject}
              addedWeek={addedWeek}
              addedWeekLocation={addedWeekLocation}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Find;
