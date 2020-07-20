import React, { useState } from "react";

const Add = () => {
  const [week, setWeek] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [module, setmodule] = useState("");
  const [more, setMore] = useState("");
  const locationList = [
    "Central London",
    "Birmingham",
    "Manchester",
    "Glasgow",
  ];
  const weekList = [0, 1, 2, 3, 4, 5];

  const moduleList = ["HTML&CSS", " JS", " React", " Node.js", "MongoDB"];

  function changStartTimeHandler(event) {
    console.log(event.target.value);
    setStart(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    event.target.reset();
    const body = JSON.stringify({
      week,
      location,
      date,
      start,
      end,
      module,
      more,
    });

    fetch(`http://localhost:22666/week/${week}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body,
    })
      .then((res) => res.json())
      .then();
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="weekSelect">Week</label>
          <select
            id="weekSelect"
            name="week"
            className="custom-select"
            onChange={(event) => setWeek(event.target.value)}
          >
            <option>Week</option>
            {weekList.map((week, index) => (
              <option key={index} value={week}>
                {week}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="location">Location</label>
          <select
            id="location"
            className="custom-select"
            name="location"
            onChange={(event) => setLocation(event.target.value)}
          >
            <option>Location</option>
            {locationList.map((location, index) => (
              <option key={index} value={location}>
                {location}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="date"> Date </label>

          <input
            id="date"
            className="form-control"
            type="date"
            name="date"
            value={date}
            onChange={(event) => setDate(event.target.value)}
            min="2020-01-01"
            max="2020-12-31"
            required
          />

          <label htmlFor="time">Start Time</label>

          <input
            id="time"
            className="form-control"
            type="time"
            name="start"
            value={start}
            onChange={changStartTimeHandler}
            min="11:00"
            max="17:00"
            required
          />

          <label htmlFor="time"> End Time </label>

          <input
            id="time"
            className="form-control"
            type="time"
            name="end"
            value={end}
            onChange={(event) => setEnd(event.target.value)}
            min="11:00"
            max="17:00"
            required
          />
        </div>
        <div>
          <label htmlFor="module">module</label>
          <select
            id="subject"
            className="custom-select"
            name="subject"
            onChange={(event) => setmodule(event.target.value)}
          >
            <option>Select module</option>
            {moduleList.map((module, index) => (
              <option key={index} value={module}>
                {module}
              </option>
            ))}
          </select>

          <label>Module details</label>

          <textarea
            rows="3"
            className="form-control"
            value={more}
            onChange={(event) => setMore(event.target.value)}
          ></textarea>

          <div>
            <button className="btn btn-primary" type="submit">
              Save this week
            </button>
            <button type="reset" className="btn btn-danger">
              {" "}
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default Add;
