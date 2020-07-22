import React, { useState } from "react";

const TimeDetailsPage = (props) => {
  const [rowDelete, setRowDelete] = useState(props.week.timeDetails);

  const deleteHandler = (index) => {
    setRowDelete(rowDelete.slice(index, 1));
  };

  const deleteUser = (number, id) => {
    fetch(`http://localhost:22666/week/${number}/class/${id}`, {
      method: "DELETE",
    })
      .catch((error) => console.log(error))
      .then((res) => res.json())
      .then();
  };

  const editUser = (number, id) => {
    const body = JSON.stringify({
      id,
    });
    fetch(`http://localhost:22666/week/${number}/class/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body,
    })
      .catch((error) => console.log(error))
      .then((res) => res.json())
      .then();
  };

  return (
    <div>
      <table className="table table-striped time-table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Start Time</th>
            <th scope="col">Finish Time</th>
            <th scope="col">Class Type</th>
            <th scope="col">Edit/Delete</th>
          </tr>
        </thead>
        <tbody>
          {rowDelete.map((time, index) => {
            const { id, start, end, type } = time;
            return (
              <tr key={index}>
                <th scope="row">{id}</th>
                <td>{start}</td>
                <td>{end}</td>
                <td>{type}</td>
                <td>
                  <button
                    className="btn btn-info col-9 margin-button"
                    onClick={() => editUser(props.week.week, id)}
                   
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger col-9 margin-button"
                    onClick={() => deleteUser(props.week.week, id)}
                  >
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

export default TimeDetailsPage;
