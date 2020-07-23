import React, { useState } from "react";

const VolunteersDetails = (props) => {
  const [rowDelete, setRowDelete] = useState(props.week.peopleDetails);

  // const deleteHandler = (index) => {
  //   setRowDelete(rowDelete.slice(index, 1));
  // };

  const deleteUser = (number, id) => {
    fetch(`http://localhost:22666/week/${number}/volunteer/${id}`, {
      method: "DELETE",
    })
      .catch((error) => console.log(error))
      .then((res) => res.json())
      .then(setRowDelete(rowDelete.filter((item) => item.id !== id)));
  };

  const editUser = (number, id) => {
    const body = JSON.stringify({
      id,
    });
    fetch(`http://localhost:22666/week/${number}/volunteer/${id}`, {
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
      <table className="table table-sm table-hover">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Role</th>
            <th scope="col">Edit/Delete</th>
          </tr>
        </thead>
        <tbody>
          {rowDelete &&
            rowDelete.length > 0 &&
            rowDelete.map((element, index) => {
              return (
                <tr key={index}>
                  <td>{element.fullName}</td>
                  <td>{element.role}</td>
                  <td>
                    <button
                      className="btn btn-info col-5 margin-button"
                      onClick={() => editUser(props.week.week, element.id)}
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deleteUser(props.week.week, element.id)}
                      className="btn btn-danger col-5 margin-button"
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

export default VolunteersDetails;
