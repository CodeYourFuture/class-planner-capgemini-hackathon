import React, { useState } from "react";
// import useForm from "./useForm";
// import validate from "./LoginFormValidationRules";

const SignUp = (props) => {
  // const { values, errors, handleChange, handleSubmit } = useForm(
  //   submit,
  //   validate
  // );

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [slackId, setSlackId] = useState("");
  const [comment, setComment] = useState("");

  const handleSignUp = () => {
    const body = JSON.stringify({
      name,
      email,
      role,
      slackId,
      comment,
    });

    fetch(`http://localhost:22666/week/${props.session}/volunteer`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body,
    })
      .then((res) => res.json())
      .then(() => {
        console.log("Data added");
      });
  };

  return (
    <div className="card bg-light mb-2">
      <div className="card-header bg-secondary text-white">
        <h3 className="card-title">Sign Up form</h3>
      </div>
      <div className="card-body">
        <form onSubmit={handleSignUp}>
          <div className="form-group">
            <label htmlFor="name">Full Name*:</label>
            <input
              className="form-control"
              type="text"
              id="name"
              name="name"
              placeholder="Full Name"
              onChange={(event) => setName(event.target.value)}
              value={name || ""}
              required
            />
            {/* {errors.name && (
            <small className="form-text help">{errors.name}</small>
          )} */}
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address*:</label>
            <input
              autoComplete="off"
              className="form-control"
              id="email"
              name="email"
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Email"
              value={email || ""}
              required
            />
            {/* {errors.email && (
            <small className="form-text help">{errors.email}</small>
          )} */}
          </div>
          <div className="form-group">
            <label htmlFor="volunteer">Role*:</label>
            <select
              className={"custom-select"}
              name="volunteer"
              id="volunteer"
              onChange={(e) => setRole(e.target.value)}
              required
            >
              <option value="select">Select...</option>
              <option value="Coordinator">Coordinator</option>
              <option value="Lead Teacher">Lead Teacher</option>
              <option value="Assistant Lead Teacher">
                Assistant Lead Teacher
              </option>
              <option value="Teaching Assistant">Teaching Assistant</option>
              <option value="Personal Development Rep">
                Personal Development Rep
              </option>
            </select>
            {/* {errors.volunteer && (
            <small className="form-text help">{errors.volunteer}</small>
          )} */}
          </div>
          <div className="form-group">
            <label className="label">Slack ID:</label>
            <input
              className="form-control"
              type="text"
              name="slack"
              placeholder="slack ID"
              onChange={(e) => setSlackId(e.target.value)}
              value={slackId || ""}
            />
          </div>
          <div className="form-group">
            <label className="label">Comment:</label>
            <div className="control">
              <textarea
                className="form-control"
                type="text"
                name="comment"
                placeholder="comment"
                onChange={(e) => setComment(e.target.value)}
                value={comment || ""}
                rows="3"
              />
            </div>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="btn btn-success col-7 signupPageButton"
            >
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
