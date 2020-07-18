import React, { useState } from "react";

const Add = () => {
  const [week, setWeek] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [subject, setSubject] = useState("");
  const [more, setMore] = useState("");
  const locationList = [
    "Central London",
    "Birmingham",
    "Manchester",
    "Glasgow",
  ];
  const weekList = [0, 1, 2, 3, 4, 5];

  const subjectList = ["HTML&CSS", " JS", " React", " Node.js", "MongoDB"];

  function changStartTimeHandler(event) {
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
      subject,
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
        <div className="card">
          <div className="card-header padding ">
            <div className="row">
              <div className="col-9 margin">
                <h3 className="col-sm-9 ">
                  Week:{" "}
                  {
                    <select
                      id="weekSelect"
                      name="week"
                      className="custom-select col-9"
                      onChange={(event) => setWeek(event.target.value)}
                    >
                      <option>Week</option>
                      {weekList.map((week, index) => (
                        <option  key={index} value={week}>
                          {week}
                        </option>
                      ))}
                    </select>
                  }
                </h3>
                <p className="col-sm-9 add-location">
                  <label className="col-12">Location</label>
                  {
                    <select
                      id="location"
                      className="custom-select col-9"
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
                  }
                </p>
              </div>
              <div className="col-sm-3 margin">
                <ul className="week-date-time">
                  <li>
                    Date
                    {
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
                    }
                  </li>
                  <li>
                    Start Time
                    {
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
                    }
                  </li>

                  <li>
                    End Time
                    {
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
                    }
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="card-body padding">
            <div className="row">
              <div className="col-sm-9">
                <h1 className="card-title title">
                  Subject
                  {
                    <select
                      id="subject"
                      className="custom-select col-9"
                      name="subject"
                      onChange={(event) => setSubject(event.target.value)}
                    >
                      <option>Subject</option>
                      {subjectList.map((subject, index) => (
                        <option key={index} value={subject}>
                          {subject}
                        </option>
                      ))}
                    </select>
                  }
                </h1>
                <button
                  className="btn btn-primary col-9 margin-button"
                  type="submit"
                >
                  Save this week
                </button>
                <button
                  type="reset"
                  className="btn btn-danger col-9 margin-button"
                >
                  {" "}
                  Cancel
                </button>
              </div>
              <div className="col-sm-3">
                <label htmlFor="text">Text</label>
                <textarea
                  id="text"
                  rows="3"
                  className="form-control"
                  value={more}
                  onChange={(event) => setMore(event.target.value)}
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
export default Add;
