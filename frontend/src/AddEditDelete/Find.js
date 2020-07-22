import React, { useState, useEffect } from "react";
import EditDelete from "./EditDelete";

const Find = () => {
  const [weekNumber, setWeekNumber] = useState("");

  const [addedWeekLocation, setAddedWeekLocation] = useState("");
  const [addedStartTime, setAddedStartTime] = useState("");
  const [addedEndTime, setAddedEndTime] = useState("");
  const [addedDate, setAddedDate] = useState("");
  const [addedModule, setAddedModule] = useState("");
  const [addedWeek, setAddedWeek] = useState("");
  const [addedMore, setAddedMore] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    fetch(`http://localhost:22666/week/${weekNumber}`, { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        setAddedWeek(data.week);
        setAddedWeekLocation(data.location);
        setAddedDate(data.date);
        setAddedStartTime(data.start);
        setAddedEndTime(data.end);
        setAddedModule(data.subject);
        setAddedMore(data.more);
      });
  }

  return (
    <div className="container">
      <div className="container">
        <h3>Week Finder</h3>
        <form className="form-group" onSubmit={handleSubmit}>
          <label htmlFor="week">Week</label>
          <input
            type="number"
            className="form-control"
            id="week"
            name="week"
            placeholder="week number"
            value={weekNumber}
            onChange={(e) => setWeekNumber(e.target.value)}
          />
          <button type="submit" className="btn btn-primary">
            Find
          </button>
        </form>
      </div>
      <div className="container">
        <EditDelete
          setAddedWeekLocation={setAddedWeekLocation}
          setAddedDate={setAddedDate}
          setAddedStartTime={setAddedStartTime}
          setAddedEndTime={setAddedEndTime}
          setAddedModule={setAddedModule}
          setAddedWeek={setAddedWeek}
          setAddedMore={setAddedMore}
          addedStartTime={addedStartTime}
          addedEndTime={addedEndTime}
          addedDate={addedDate}
          addedModule={addedModule}
          addedWeek={addedWeek}
          addedWeekLocation={addedWeekLocation}
          addedMore={addedMore}
        />
      </div>
    </div>
  );
};

export default Find;
