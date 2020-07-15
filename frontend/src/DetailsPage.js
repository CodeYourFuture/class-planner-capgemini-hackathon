import React from "react";
import TimeDetailsPage from "./TimeDetailsPage";
import VolunteersDetails from "./VolunteersDetails";

const DetailsPage = (props) => {
  return (
    <div>
      <div className="container">
        <div className="card">
          <div className="card-header padding">
            <div className="row ">
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
          <div className="card-body">
            <div className="row">
              <TimeDetailsPage week={props.week} className="col-6" />
              <VolunteersDetails week={props.week} className="col-6" />
            </div>
          </div>

          <div className="card-footer text-muted text-center padding">
            CODE YOUR FUTURE
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
