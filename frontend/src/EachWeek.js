import React from "react";

const EachWeek = ({ props }) => {
  return (
    <div>
    { props.map((week) => (
      <div className="week">
        <div className="classDetails">
          <div className="week-time">
            <div>
              <h1>Week {week.week}</h1>
            </div>
            <div>
              <p>Location : {week.location}</p>
              <p>Date : {week.date}</p>
              <p>
                Time : {week.start} - {week.end}
              </p>
            </div>
          </div>
          <div className="subject">
            <h1>Subject : {week.subject}</h1>
            <p>More Explenation : {week.more}</p>
          </div>
          <div className="buttons">
            <button>Details</button>
            <button>Join Us</button>
          </div>
        </div>
        <div className="teachingDetails">
          <label>
            <p>
              Lead Teacher 1<input type="checkbox"></input>
            </p>
          </label>
          <label>
            <p>
              Lead Teacher 2<input type="checkbox"></input>
            </p>
          </label>
          <label>
            <p>
              Teacher Asistant 1<input type="checkbox"></input>
            </p>
          </label>
          <label>
            <p>
              Teacher Asistant 2<input type="checkbox"></input>
            </p>
          </label>
          <label>
            <p>
              Mentor 1<input type="checkbox"></input>
            </p>
          </label>
        </div>
      </div>
    ))}
  </div>
  );
};

export default EachWeek;
