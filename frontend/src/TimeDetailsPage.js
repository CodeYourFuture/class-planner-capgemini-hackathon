import React from "react";

const TimeDetailsPage = (props) => {
  return (
    <div>
      <table className="table table-striped col-6 time-table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Start Time</th>
            <th scope="col">Finish Time</th>
            <th scope="col">Class Type</th>
          </tr>
        </thead>
        <tbody>
          {props.week.timeDetails.map((time, index) => {
            return (
              <tr key={index}>
                <th scope="row">id</th>
                <td>{time.start}</td>
                <td>{time.end}</td>
                <td>{time.type}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button href="#" className="btn btn-primary">
        Add Time
      </button>
      <button href="#" className="btn btn-primary">
        Syllabus
      </button>
    </div>
  );
};

export default TimeDetailsPage;
