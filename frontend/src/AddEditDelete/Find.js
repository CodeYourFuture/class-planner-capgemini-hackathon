import React, { useState, useEffect } from "react";
import EditDelete from "./EditDelete";

const Find = () => {
  const [weekNumber, setWeekNumber] = useState("");

  const [addedWeekLocation, setAddedWeekLocation] = useState("");
  const [addedStartTime, setAddedStartTime] = useState("");
  const [addedEndTime, setAddedEndTime] = useState("");
  const [addedDate, setAddedDate] = useState("");
  const [addedSubject, setAddedSubject] = useState("");
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
        setAddedSubject(data.subject);
        setAddedMore(data.more);
      });
  }

  return (
    <div className="">
      <p>Week Finder</p>
      <div className="row search-wrapper">
        <div className="col">
          <form className="" onSubmit={handleSubmit}>
            <label htmlFor="week">Week</label>
            <input
              type="number"
              id="week"
              name="week"
              placeholder="week number"
              value={weekNumber}
              onChange={(e) => setWeekNumber(e.target.value)}
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
              setAddedStartTime={setAddedStartTime}
              setAddedEndTime={setAddedEndTime}
              setAddedSubject={setAddedSubject}
              setAddedWeek={setAddedWeek}
              setAddedMore={setAddedMore}
              addedStartTime={addedStartTime}
              addedEndTime={addedEndTime}
              addedDate={addedDate}
              addedSubject={addedSubject}
              addedWeek={addedWeek}
              addedWeekLocation={addedWeekLocation}
              addedMore={addedMore}
            />
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Find;
