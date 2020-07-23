import React from "react";
const EditDeleteClass = (props) => {
  const reqBody = {
    id: props.id,
    start: props.start,
    end: props.end,
    type: props.type,
  };
  const handleUpdate = (number, id) => {
    const body = JSON.stringify(reqBody);
    fetch(`http://localhost:22666/week/${number}/class/${id}`, {
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
    <div className="card bg-light mb-2">
      <div className="card-header bg-secondary text-white">
        <h3 className="card-title">Session Editor</h3>
      </div>
      <div className="card-body">
        <form>
          <div className="mb-2">
            <label htmlFor="start-time-edit edit-card">Start Time:</label>
            <input
              onChange={(event) => {
                props.setStart(event.target.value);
                reqBody.start = event.target.value;
              }}
              type="search"
              value={props.start}
              id="start-time-edit"
              className="form-control"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="finish-time-edit">Finish Time:</label>
            <input
              onChange={(event) => {
                props.setEnd(event.target.value);
                reqBody.end = event.target.value;
              }}
              type="search"
              value={props.end}
              id="finish-time-edit"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="class-type-edit">Class Type:</label>
            <input
              onChange={(event) => {
                props.setType(event.target.value);
                reqBody.type = event.target.value;
              }}
              type="search"
              value={props.type}
              id="class-type-edit"
              className="form-control"
            />
          </div>
          <div className="row">
            <div className="col-4"></div>
            <button
              className="btn btn-info col-4"
              type="submit"
              onClick={() => handleUpdate(props.week.week, props.id)}
            >
              update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default EditDeleteClass;
