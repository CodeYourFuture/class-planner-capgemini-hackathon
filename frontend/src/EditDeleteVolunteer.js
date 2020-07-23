import React from "react";

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
    <div className="card bg-light mb-2">
      <div className="card-header bg-secondary text-white">
        <h3 className="card-title">Volunteer Details Editor</h3>
      </div>
      <div className="card-body">
        <form>
          <div className="mb-2">
            <label htmlFor="full-name-edit">Full Name :</label>
            <input
              onChange={(event) => {
                return (
                  props.setFullName(event.target.value),
                  (reqBody.fullName = event.target.value)
                );
              }}
              type="text"
              id="full-name-edit"
              value={props.fullName}
              className="form-control"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="email-editor">Email</label>
            <input
              onChange={(event) => {
                return (
                  props.setEmail(event.target.value),
                  (reqBody.email = event.target.value)
                );
              }}
              type="text"
              id="email-editor"
              placeholder="Your email is secure"
              className="form-control"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="role-editor">Role</label>
            <input
              onChange={(event) => {
                return (
                  props.setRole(event.target.value),
                  (reqBody.role = event.target.value)
                );
              }}
              type="text"
              id="role-editor"
              value={props.role}
              className="form-control"
            />
            <div className="mb-3">
              <label htmlFor="slackId-editor">Slack ID</label>
              <input
                onChange={(event) => {
                  props.setSlackId(event.target.value)(
                    (reqBody.slackId = event.target.value)
                  );
                }}
                type="text"
                id="slackId-editor"
                value={props.slackId}
                className="form-control"
              />
            </div>
          </div>
          <div className="text-center">
            <button
              className="btn btn-info col-4"
              type="submit"
              onClick={() => handleUpdate(props.week.week, props.id)}
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default EditDeleteVolunteer;
