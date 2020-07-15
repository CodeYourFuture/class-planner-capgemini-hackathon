import React from "react";

const VolunteersDetails = (props) => {
  return (
    <div>
      {console.log(props.week.peopleDetails)}
      <table className="table table-sm table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Role</th>
          </tr>
        </thead>
        <tbody>
          {props.week.peopleDetails.map((element, index) => {
            return (
              <tr key={index}>
                <th scope="row">id</th>
                <td>{element.fullName}</td>
                <td>{element.role}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default VolunteersDetails;
