import React, { useState } from "react";
import TeacherDetails from "./TeacherDetails";
import { Link } from "react-router-dom";
import DetailsPage from "./DetailsPage";

const Week = (props) => {
  const [userClick, setUserClick] = useState(null)
  console.log(props.week.week);
  {console.log("data",userClick)}

  const detailsHandler = (e) => {
    e.preventDefault();
    console.log(props.week.week);
  }; 

  // function filterWeek(param) {
    
  // }

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
<<<<<<< HEAD
              <Link to="/details">
              <DetailsPage userClick={userClick}/>
                <button
                  className="btn btn-primary col-9 margin-button"
                 onClick = {() =>setUserClick(props.week.week)}
                 
                >
                  {console.log("grab id",props.week.week)}
=======
              <Link to={`/details/${props.week.week}`}>
                <button className="btn btn-primary col-9 margin-button">
>>>>>>> e0fb53ea8fd882fec92979f691c9ee466b87b8e4
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
// I 
export default Week;
