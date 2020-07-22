import React from "react";

const VolunteersDetails = (props) => {
  // console.log(props.week.peopleDetails);

  return (
    <div>
      <table className="table table-sm table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Role</th>
            <th scope="col">Edit/Delete</th>
          </tr>
        </thead>
        <tbody>
          {props.week.peopleDetails.map((element, index) => {
            return (
              <tr key={index}>
                <th scope="row">{element.id}</th>
                <td>{element.fullName}</td>
                <td>{element.role}</td>
                <td>
                  <button className="btn btn-info col-5 margin-button">
                    Edit
                  </button>
                  <button className="btn btn-danger col-5 margin-button">
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default VolunteersDetails;
