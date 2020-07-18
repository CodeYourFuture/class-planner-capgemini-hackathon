import React, { useState } from "react";

import EditDelete from "./EditDelete";

const Find = () => {
  const [weekList, setWeekList] = useState("");
  const [addedWeekLocation, setAddedWeekLocation] = useState("");
  const [addedStartTime, setAddedStartTime] = useState("");
  const [addedEndTime, setAddedEndTime] = useState("");
  const [addedDate, setAddedDate] = useState("");
  const [addedSubject, setAddedSubject] = useState("");
  const [addedWeek, setAddedWeek] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    fetch(`http://localhost:22666/week/${weekList}`, { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        setAddedWeekLocation(data.location);
        setAddedDate(data.date);
        setAddedStartTime(data.start);
        setAddedEndTime(data.end);
        setAddedSubject(data.subject);
        setAddedWeek(data.week);
      });
  }

  return (
    <div>
      <p>Week Finder</p>
      <div className="row search-wrapper">
        <div className="col">
          <form onSubmit={handleSubmit}>
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
              setAddedWeek={setAddedWeek}
              setAddedWeekLocation={setAddedWeekLocation}
              setAddedDate={setAddedDate}
              setAddedStartTime={setAddedStartTime}
              setAddedEndTime={setAddedEndTime}
              setAddedSubject={setAddedSubject}
              addedStartTime={addedStartTime}
              addedEndTime={addedEndTime}
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
