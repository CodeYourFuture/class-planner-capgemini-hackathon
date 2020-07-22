import React, { useState } from "react";
import { Link } from "react-router-dom";

const Add = () => {
  const [week, setWeek] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [module, setModule] = useState("");
  const [more, setMore] = useState("");
  const locationList = [
    "Central London",
    "Birmingham",
    "Manchester",
    "Glasgow",
  ];

  const moduleList = ["HTML&CSS", " JS", " React", " Node.js", "MongoDB"];

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
        <div className="card">
          <div className="card-header">
            <ul className="nav nav-tabs card-header-tabs">
              <li className="nav-item">
                <a className="nav-link active">Add Week</a>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="edit-delete">
                  Edit/Delete
                </Link>
              </li>
            </ul>
          </div>
          <div className="card-body">
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="module-add"> Module:</label>
                <select
                  id="module-add"
                  className="form-control"
                  name="subject"
                  onChange={(event) => setModule(event.target.value)}
                >
                  <option className="p">Select module</option>
                  {moduleList.map((module, index) => (
                    <option key={index} value={module}>
                      {module}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="week-number-add">Week:</label>
                <input
                  id="week-number-add"
                  type="number"
                  name="week"
                  placeholder="week number"
                  className="form-control"
                  value={week}
                  onChange={(e) => setWeek(e.target.value)}
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="syllabus">Link to Syllabus</label>
              <input
                type="text"
                className="form-control"
                id="syllabus"
                placeholder="Link to syllabus"
              />
            </div>
            <ul className="week-date-time">
              <div className="form-row">
                <li className="form-group col-3">
                  <p>
                    Location:{" "}
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
                  </p>
                </li>
                <li className="form-group col-3">
                  <p>
                    Date:
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
                  </p>
                </li>
                <li className="form-group col-3">
                  Start Time:{" "}
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
                </li>
                <li className="form-group col-3">
                  End Time:{" "}
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
                </li>
              </div>
              <label htmlFor="module-details-add"> Module details:</label>
              <textarea
                id="module-details-add"
                placeholder="Module details"
                rows="3"
                className="form-control"
                value={more}
                onChange={(event) => setMore(event.target.value)}
              ></textarea>
            </ul>
            <div className="card-body">
              <div className="row">
                <div className="col-1"></div>
                <button
                  className="btn btn-primary col-5 margin-button"
                  type="submit"
                >
                  Save this week
                </button>
                <button
                  className="btn btn-danger col-5 margin-button"
                  type="reset"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
          <div className="card-footer text-muted text-center padding">
            CODE YOUR FUTURE
          </div>
        </div>
      </form>
    </div>
  );
};
export default Add;
