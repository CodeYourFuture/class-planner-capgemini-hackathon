import React from "react";

const EditDelete = (props) => {
  const reqBody = {
    week: props.addedWeek,
    location: props.addedWeekLocation,
    date: props.addedDate,
    start: props.addedStartTime,
    end: props.addedEndTime,
    module: props.addedModule,
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
    <form>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label htmlFor="module">Module</label>
          <input
            id="module"
            type="text"
            className="form-control"
            name="name"
            value={props.addedModule}
            onChange={(e) => {
              reqBody.module = e.target.value;
              props.setAddedModule(e.target.value);
            }}
          />
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="week-number">Week Number</label>
          <input
            id="week-number"
            type="text"
            className="form-control"
            name="name"
            value={props.addedWeek}
            onChange={(e) => {
              reqBody.week = e.target.value;
              props.setAddedWeek(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="syllabus">Link to Syllabus</label>
        <input
          type="text"
          className="form-control"
          id="syllabus"
          placeholder="Link to syllabus"
        />
      </div>
      <ul className="week-date-time">
        <div className="form-row">
          <li className="form-group col-3">
            <p>
              Location:{" "}
              <input
                type="text"
                name="name"
                className="custom-select"
                value={props.addedWeekLocation}
                onChange={(e) => {
                  props.setAddedWeekLocation(e.target.value);
                }}
              />
            </p>
          </li>
          <li className="form-group col-3">
            <p>
              Date:
              <input
                type="text"
                className="form-control"
                name="name"
                value={props.addedDate}
                onChange={(e) => {
                  reqBody.date = e.target.value;
                  props.setAddedDate(e.target.value);
                }}
                required
              />
            </p>
          </li>
          <li className="form-group col-3">
            Start Time:{" "}
            <input
              type="text"
              className="form-control"
              name="name"
              value={props.addedStartTime}
              onChange={(e) => {
                reqBody.start = e.target.value;
                props.setAddedStartTime(e.target.value);
              }}
              required
            />
          </li>
          <li className="form-group col-3">
            End Time:{" "}
            <input
              type="text"
              className="form-control"
              name="name"
              value={props.addedEndTime}
              onChange={(e) => {
                reqBody.end = e.target.value;
                props.setAddedEndTime(e.target.value);
              }}
              required
            />
          </li>
        </div>
        <label htmlFor="module-details-edit"> Module details:</label>
        <input
          id="module-details-edit"
          type="text"
          className="form-control"
          name="name"
          placeholder="Module details"
          value={props.addedMore}
          onChange={(e) => {
            reqBody.more = e.target.value;
            props.setAddedMore(e.target.value);
          }}
        />
      </ul>
      <div className="card-body">
        <div className="row">
          <div className="col-1"></div>
          <button
            className="btn btn-primary col-5 margin-button"
            onClick={() => handleUpdate(props.addedWeek)}
          >
            Update
          </button>
          <button
            className="btn btn-danger col-5 margin-button"
            onClick={() => onClickDelete(props.addedWeek)}
          >
            Delete
          </button>
        </div>
      </div>
    </form>
  );
};

export default EditDelete;
