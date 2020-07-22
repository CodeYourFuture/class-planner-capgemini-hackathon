import React, { useState } from "react";

const TimeDetailsPage = (props) => {
  console.log(props.week.timeDetails);
  const deleteUser = (number, id) => {
    console.log(props.week.timeDetails.id);
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

  const [deleteRow, setDeleteRow] = useState("");

  const changeHandler = (e) => {
    setDeleteRow(e.target.value);
  };

  const [editRow, setEditRow] = useState("");

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
          {props.week.timeDetails.map((time, index) => {
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
                    onChange={changeHandler}
                    value={editRow}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger col-9 margin-button"
                    onClick={() => deleteUser(props.week.week, id)}
                    value={deleteRow}
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
