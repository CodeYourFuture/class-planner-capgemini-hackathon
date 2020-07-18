import React, { useState } from "react";

const EditDelete = (props) => {
  const reqBody = {
    week: props.addedWeek,
    location: props.addedWeekLocation,
    date: props.addedDate,
    start: props.addedStartTime,
    end: props.addedEndTime,
    subject: props.addedSubject,
    more: props.addedMore,
  };
  const onClickDelete = (id) => {
    fetch(`http://localhost:22666/week/${id}`, { method: "DELETE" })
      .catch((error) => console.log(error))
      .then((res) => res.json())
      .then();
  };

  const handleUpdate = (id) => {
    const body = JSON.stringify(reqBody);
    fetch(`http://localhost:22666/week/${id}`, {
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
    <div className="">
      <div>
        <form>
          <div className="">
            <label>
              Week Number:
              <input
                type="text"
                name="name"
                value={props.addedWeek}
                onChange={(e) => {
                  reqBody.week = e.target.value;
                  props.setAddedWeek(e.target.value);
                }}
              />
            </label>
            <label>
              Subject:
              <input
                type="text"
                name="name"
                value={props.addedSubject}
                onChange={(e) => {
                  reqBody.subject = e.target.value;
                  props.setAddedSubject(e.target.value);
                }}
              />
            </label>
            <label>
              Date:
              <input
                type="text"
                name="name"
                value={props.addedDate}
                onChange={(e) => {
                  reqBody.date = e.target.value;
                  props.setAddedDate(e.target.value);
                }}
              />
            </label>
            <label>
              Start Time
              <input
                type="text"
                name="name"
                value={props.addedStartTime}
                onChange={(e) => {
                  reqBody.start = e.target.value;
                  props.setAddedStartTime(e.target.value);
                }}
              />
            </label>
            <label>
              End Time
              <input
                type="text"
                name="name"
                value={props.addedEndTime}
                onChange={(e) => {
                  reqBody.end = e.target.value;
                  props.setAddedEndTime(e.target.value);
                }}
              />
            </label>
            <label>
              Location:
              <input
                type="text"
                name="name"
                value={props.addedWeekLocation}
                onChange={(e) => {
                  props.setAddedWeekLocation(e.target.value);
                }}
              />
            </label>
            <label>
              More
              <input
                type="text"
                name="name"
                value={props.addedMore}
                onChange={(e) => {
                  reqBody.more = e.target.value;
                  props.setAddedMore(e.target.value);
                }}
              />
            </label>
          </div>
          <div className="">
            <button onClick={() => onClickDelete(props.addedWeek)}>
              Delete
            </button>
            <button onClick={() => handleUpdate(props.addedWeek)}>
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditDelete;
