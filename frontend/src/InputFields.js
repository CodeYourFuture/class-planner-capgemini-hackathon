import React, { useState } from "react";

const InputFields = (props) => {
  const [start, setStartTime] = useState("");
  const [end, setFinishTime] = useState("");
  const [type, setClassType] = useState("");
  const handleAddNew = () => {
    const body = JSON.stringify({
      start,
      end,
      type,
    });
    fetch(`http://localhost:22666/week/addsession/${props.session}/class`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body,
    })
      .then((res) => res.json())
      .then(() => {
        console.log("Data added");
      });
  };
  return (
    <div className="card bg-light mb-2">
      <div className="card-header bg-secondary text-white">
        <h3 className="card-title">Time and Session Details</h3>
      </div>
      <div className="card-body">
        <form onSubmit={handleAddNew}>
          <div className="mb-2">
            <label>Start Time:</label>
            <input
              onChange={(event) => setStartTime(event.target.value)}
              type="text"
              value={start}
              className="form-control"
            />
          </div>
          <div className="mb-2">
            <label>Finish Time:</label>
            <input
              onChange={(event) => setFinishTime(event.target.value)}
              type="text"
              value={end}
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label>Class Type:</label>
            <input
              onChange={(event) => setClassType(event.target.value)}
              type="text"
              value={type}
              className="form-control"
            />
          </div>
          <div className="text-center">
            <button className="btn btn-info col-4" type="submit">
              Add to Timetable
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default InputFields;
