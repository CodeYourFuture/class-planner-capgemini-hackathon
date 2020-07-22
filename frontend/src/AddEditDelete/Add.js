import React, { useState } from "react";

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
        <div className="card">
          <div className="card-header padding ">
            <div className="row">
              <h3 className="col-9 margin" htmlFor="week">
                Week:
                <span className="font">
                  <input
                    type="number"
                    id="week"
                    name="week"
                    placeholder="week number"
                    className="custom-select col-9 hotfix"
                    value={week}
                    onChange={(e) => setWeek(e.target.value)}
                  />
                </span>
              </h3>
              <div className="col-3 margin">
                <ul className="week-date-time">
                  <li>
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
                  <li>
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
                </ul>
              </div>
            </div>
          </div>
          <div className="card-body padding">
            <div className="row">
              <div className="col-sm-9">
                <h3 className="card-title module">
                  Module:
                  <span className="font">
                    <select
                      id="subject"
                      className="custom-select col-9"
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
                  </span>
                </h3>
                <button
                  className="btn btn-primary col-9 margin-button"
                  type="submit"
                >
                  Save this week
                </button>
                <button
                  className="btn btn-danger col-9 margin-button"
                  type="reset"
                >
                  Cancel
                </button>
              </div>
              <div className="col-sm-3">
                <ul className="week-date-time">
                  <li>
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
                    />{" "}
                    - End Time:{" "}
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
                </ul>
                <textarea
                  placeholder="Module details"
                  rows="3"
                  className="form-control"
                  value={more}
                  onChange={(event) => setMore(event.target.value)}
                ></textarea>
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
