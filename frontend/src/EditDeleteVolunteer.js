import React, { useState } from "react";

const EditDeleteVolunteer = (props) => {
  const reqBody = {
    fullName: props.fullName,
    email: props.email,
    role: props.role,
    slackId: props.slackId,
    comments: props.comments,
  };

  const handleUpdate = (number, id) => {
    const body = JSON.stringify(reqBody);
    fetch(`http://localhost:22666/week/${number}/volunteer/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body,
    })
      .then((res) => res.json())
      .then();
  };
  return (
    <form className="form-datetime">
      <h3></h3>
      <div className="start-time">
        <div>
          <label>Full Name :</label>
        </div>
        <div>
          <input
            onChange={(event) => {
              return (
                props.setFullName(event.target.value),
                (reqBody.fullName = event.target.value)
              );
            }}
            type="text"
            value={props.fullName}
          />
        </div>
      </div>
      <div className="finish-time">
        <div>
          <label>Email</label>
        </div>
        <div>
          <input
            onChange={(event) => {
              props.setEmail(event.target.value)(
                (reqBody.email = event.target.value)
              );
            }}
            type="text"
          />
        </div>
      </div>
      <div className="class-type">
        <div>
          <label>Role</label>
        </div>
        <div>
          <input
            onChange={(event) => {
              props.setRole(event.target.value)(
                (reqBody.role = event.target.value)
              );
            }}
            type="text"
            value={props.role}
          />
        </div>
        <div>
          <label>Slack ID</label>
        </div>
        <div>
          <input
            onChange={(event) => {
              props.setSlackId(event.target.value)(
                (reqBody.slackId = event.target.value)
              );
            }}
            type="text"
            value={props.slackId}
          />
        </div>
        {/* <div>
          <label>Comments</label>
        </div>
        <div>
          <input
            onChange={(event) => {
              reqBody.comments = event.target.value;
              props.setComments(event.target.value);
            }}
            type="text"
            value={props.comments}
          />
        </div> */}
      </div>
      <div className="date-time-btn">
        <button
          className="btn-date-time"
          type="submit"
          onClick={() => handleUpdate(props.week.week, props.id)}
        >
          Update
        </button>
      </div>
    </form>
  );
};
export default EditDeleteVolunteer;
