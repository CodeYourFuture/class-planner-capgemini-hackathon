import React, { useState } from "react";
const EditDeleteClass = (props) => {
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
            value={props.start}
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
            value={props.end}
          />
        </div>
      </div>
      <div className="class-type">
        <div>
          <label>Class Type:</label>
        </div>
        <div>
          <input
            onChange={(event) => props.setType(event.target.value)}
            type="search"
            value={props.type}
          />
        </div>
      </div>
      <div className="date-time-btn">
        <button className="btn-date-time" type="submit">
          update
        </button>
      </div>
    </form>
  );
};
export default EditDeleteClass;
