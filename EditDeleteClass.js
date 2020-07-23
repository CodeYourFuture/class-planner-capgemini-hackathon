import React, { useState } from "react";
const EditDeleteClass = (props) => {
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [type, setType] = useState("");
  const editClass = (weekId, id) => {
    const [] = useState();

    const body = JSON.stringify({
      id,
    });
    fetch(`http://localhost:22666/week/${props.weekId}/class/:id`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      body,
    })
      .catch((error) => console.log(error))
      .then((res) => res.json())
      .then();
  };
  return (
    <form /*onSubmit={handleSubmit}*/ className="form-datetime">
      <h3>Class Type Finder</h3>
      <div className="start-time">
        <div>
          <label>Start Time:</label>
        </div>
        <div>
          <input
            /*onChange={(event) => setStart(event.target.value)}*/
            type="search"
            /*value={start}*/
          />
        </div>
      </div>
      <div className="finish-time">
        <div>
          <label>Finish Time:</label>
        </div>
        <div>
          <input
            /*onChange={(event) => setEnd(event.target.value)}*/
            type="search"
            /*value={end}*/
          />
        </div>
      </div>
      <div className="class-type">
        <div>
          <label>Class Type:</label>
        </div>
        <div>
          <input
            /*onChange={(event) => setType(event.target.value)}*/
            type="search"
            /*value={type}*/
          />
        </div>
      </div>
      <div className="date-time-btn">
        <button
          className="btn-date-time"
          type="submit"
          onClick={() => editClass()}
        >
          update
        </button>
      </div>
    </form>
  );
};
export default EditDeleteClass;
