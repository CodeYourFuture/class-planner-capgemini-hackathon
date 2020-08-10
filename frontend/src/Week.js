import React from "react";
import TeacherDetails from "./TeacherDetails";
import { Link } from "react-router-dom";

const Week = (props) => {
  return (
    <div className="container">
      <div className="card">
        <div className="card-header padding ">
          <div className="row">
            <h3 className="col-sm-9 margin">Week: {props.week.week}</h3>
            <div className="col-sm-3 margin">
              <ul className="week-date-time">
                <li>{props.week.location}</li>
                <li>{props.week.date}</li>
                <li>
                  {props.week.start} - {props.week.end}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="card-body padding">
          <div className="row">
            <div className="col-sm-9">
              <h1 className="card-title title">{props.week.subject}</h1>
              <Link to={`/details/${props.week.week}`}>
                <button className="btn btn-primary col-9 margin-button">
                  View Details
                </button>
              </Link>
            </div>
            <div className="col-sm-3">
              <TeacherDetails className="margin" />
            </div>
          </div>
        </div>
        <div className="card-footer text-muted text-center padding">
          CODE YOUR FUTURE
        </div>
      </div>
    </div>
  );
};
export default Week;
