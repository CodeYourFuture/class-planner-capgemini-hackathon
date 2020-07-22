import React from "react";

const  ClassTable = (props) => (
  <table>
    <thead>
      <tr>
        <th>Class Type</th>
        <th>Start Time</th>
         <th>Finish Time</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {props.users && props.users.length > 0 ? (
        props.users.map((user) => (
          <tr key={user.id}>
            <td>{user.classType}</td>
            <td>{user.startTime}</td>
            <td>{user.finishTime}</td>
            <td>
              <button
                className="button muted-button"
                onClick={() => props.editRow(user)}
              >
                Edit
              </button>
              <button
                className="button muted-button"
                onClick={() => props.deleteUser(user.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No classes have been added yet.</td>
        </tr>
      )}
    </tbody>
  </table>
);

export default ClassTable;
