import React from "react";

const EachWeek = (props) => {
  return (
    <div className="week">
      <div className="classDetails">
        <div className="week-time">
          <div>
            <h1>Week {props.week}</h1>
          </div>
          <div>
            <p>Location : {props.location}</p>
            <p>Date : {props.date}</p>
            <p>
              Time : {props.start} - {props.end}
            </p>
          </div>
        </div>
        <div className="subject">
          <h1>Subject : {props.subject}</h1>
          <p>More Explenation : {props.subjectP}</p>
        </div>
        <div className="buttons">
          <button>Details</button>
          <button>Join Us</button>
        </div>
      </div>
      <div className="teachingDetails">
        <label class="container">
          <p>
            Lead Teacher 1<input type="checkbox" checked="checked"></input>
          </p>
        </label>
        <label class="container">
          <p>
            Lead Teacher 2<input type="checkbox" checked="checked"></input>
          </p>
        </label>
        <label class="container">
          <p>
            Teacher Asistant 1<input type="checkbox" checked="checked"></input>
          </p>
        </label>
        <label class="container">
          <p>
            Teacher Asistant 2<input type="checkbox" checked="checked"></input>
          </p>
        </label>
        <label class="container">
          <p>
            Mentor 1<input type="checkbox" checked="checked"></input>
          </p>
        </label>
      </div>
    </div>
  );
};

export default EachWeek;
