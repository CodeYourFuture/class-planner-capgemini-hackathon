import React, { useState } from "react";
import EditDelete from "./EditDelete";
import Navbar from "../Navbar";
import { Link } from "react-router-dom";

const Find = () => {
  const [weekNumber, setWeekNumber] = useState(0);
  const [addedWeekLocation, setAddedWeekLocation] = useState("");
  const [addedStartTime, setAddedStartTime] = useState("");
  const [addedEndTime, setAddedEndTime] = useState("");
  const [addedDate, setAddedDate] = useState("");
  const [addedModule, setAddedModule] = useState("");
  const [addedWeek, setAddedWeek] = useState("");
  const [addedMore, setAddedMore] = useState("");
  const [findAppear, setFindAppear] = useState(false);
  const [status, setStatus] = useState();

  function handleSubmit(event) {
    event.preventDefault();
    fetch(`http://localhost:22666/week/${weekNumber}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.length > 0) {
          setAddedWeek(data[0].week);
          setAddedWeekLocation(data[0].location);
          setAddedDate(data[0].date);
          setAddedStartTime(data[0].start);
          setAddedEndTime(data[0].end);
          setAddedModule(data[0].subject);
          setAddedMore(data[0].more);
        }
      });
  }

  function appearanceHandler() {
    setStatus(null)
    setFindAppear(true);
  }

  return (
    <div>
      <Navbar />
      <div className="container">
        {/* <form onSubmit={handleSubmit}> */}
          <div className="card">
            <div className="card-header">
              <ul className="nav nav-tabs card-header-tabs">
                <li className="nav-item">
                  <Link className="nav-link" to="/add-week">
                    Add Week
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="edit-delete">
                    Edit/Delete
                  </Link>
                </li>
              </ul>
            </div>
            <div className="card-body">
              <div className="container">
                <form className="form-group" onSubmit={handleSubmit}>
                  <label htmlFor="week">Find Week</label>
                  <input
                    type="number"
                    className="form-control"
                    id="week"
                    name="week"
                    placeholder="week number"
                    value={weekNumber}
                    onChange={(e) => setWeekNumber(e.target.value)}
                  />
                  <div className="card-body">
                    <div className="row">
                      <div className="col-3"></div>
                      <button
                        type="submit"
                        className="btn btn-primary col-5 margin-button"
                        onClick={appearanceHandler}
                      >
                        Find
                      </button>
                      {status && (
                        <div
                          style={{
                            backgroundColor: status.success ? "green" : "red",
                          }}
                        >
                          {" "}
                          {status.message}
                        </div>
                      )}
                    </div>
                  </div>
                </form>
              </div>
              {findAppear ? (
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
                    hideForm={() => setFindAppear(false)}
                    setStatus={setStatus}
                  />
                </div>
              ) : null}
            </div>
            <div className="card-footer text-muted text-center padding">
              CODE YOUR FUTURE
            </div>
          </div>
        {/* </form> */}
      </div>
    </div>
  );
};

export default Find;
