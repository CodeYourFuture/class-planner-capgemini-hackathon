import React, { useState } from "react";
import EditDeleteVolunteer from "./EditDeleteVolunteer";

const VolunteersDetails = (props) => {
  const [rowDelete, setRowDelete] = useState(props.week.peopleDetails);
 
  const deleteUser = (number, id) => {
    fetch(`http://localhost:22666/week/${number}/volunteer/${id}`, {
      method: "DELETE",
    })
      .catch((error) => console.log(error))
      .then((res) => res.json())
      .then(setRowDelete(rowDelete.filter((item) => item.id !== id)));
  };


  const [id, setId] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [slackId, setSlackId] = useState("");
  const [comments, setComments] = useState("");

  const handleSubmit = (number, id) => {
    fetch(`http://localhost:22666/week/${number}/volunteer/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setId(data.id);
        setFullName(data.fullName);
        setEmail(data.email);
        setRole(data.role);
        setSlackId(data.slackId);
        setComments(data.comments);
      });
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
                      onClick={() => handleSubmit(props.week.week, element.id)}
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

      <EditDeleteVolunteer
        fullName={fullName}
        id={id}
        email={email}
        role={role}
        slackId={slackId}
        comments={comments}
        setFullName={setFullName}
        setId={setId}
        setEmail={setEmail}
        setRole={setRole}
        setSlackId={setSlackId}
        setComments={setComments}
        week={props.week}
      />
    </div>
  );
};

export default VolunteersDetails;
