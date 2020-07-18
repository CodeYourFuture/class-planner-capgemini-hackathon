import React from "react";

const EditDelete = (props) => {
  const reqObject = {
    week: props.addedWeek,
    location: props.addedWeekLocation,
    date: props.addedDate,
    start: props.addedStartTime,
    end: props.addedEndTime,
    subject: props.addedSubject,
    more: "",
  };

  const onClickDelete = (id) => {
    fetch(`http://localhost:22666/week/${id}`, { method: "DELETE" })
      .catch((error) => console.log(error))
      .then((res) => res.json())
      .then();
  };

  const handleUpdate = (id) => {
    const body = JSON.stringify(reqObject);
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
    <div>
      <div>
        <form>
          <div>
            <label>
              Week Number
              <input
                type="text"
                name="name"
                value={props.addedWeek}
                onChange={(e) => {
                  reqObject.week = e.target.value;
                  props.setAddedWeek(e.target.value);
                }}
              />
            </label>
            <label>
              Location
              <input
                type="text"
                name="name"
                value={props.addedWeekLocation}
                onChange={(e) => {
                  reqObject.location = e.target.value;
                  props.setAddedWeekLocation(e.target.value);
                }}
              />
            </label>
            <label>
              Date
              <input
                type="text"
                name="name"
                value={props.addedDate}
                onChange={(e) => {
                  reqObject.date = e.target.value;
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
                  reqObject.start = e.target.value;
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
                  reqObject.end = e.target.value;
                  props.setAddedEndTime(e.target.value);
                }}
              />
            </label>
            <label>
              Subject
              <input
                type="text"
                name="name"
                value={props.addedSubject}
                onChange={(e) => {
                  reqObject.subject = e.target.value;
                  props.setAddedSubject(e.target.value);
                }}
              />
            </label>
          </div>
          <div>
            <input type="submit" value="Submit" />
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
