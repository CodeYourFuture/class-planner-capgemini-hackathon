import React from "react";
import useForm from "./useForm";
import validate from "./LoginFormValidationRules";

const SignUp = () => {
  const { values, errors, handleChange, handleSubmit } = useForm(
    submit,
    validate
  );

  function submit() {
    //TODO
  }
  return (
    <form onSubmit={handleSubmit} className="container col-6" noValidate>
      <div className="signUpTitle">
        <h2>Sign Up form</h2>
      </div>
      <div className="form-group">
        <label htmlFor="name">Full Name*:</label>
        <input
          className={
            !errors.name ? "form-control" : "form-control border-danger"
          }
          type="text"
          id="name"
          name="name"
          placeholder="Full Name"
          onChange={handleChange}
          value={values.name || ""}
          required
        />
        {errors.name && <small className="form-text help">{errors.name}</small>}
      </div>
      <div className="form-group">
        <label htmlFor="email">Email Address*:</label>
        <input
          autoComplete="off"
          className={
            !errors.email ? "form-control" : "form-control border-danger"
          }
          id="email"
          name="email"
          onChange={handleChange}
          placeholder="Email"
          value={values.email || ""}
          required
        />
        {errors.email && (
          <small className="form-text help">{errors.email}</small>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="volunteer">Role*:</label>
        <select
          className={
            !errors.volunteer ? "custom-select" : "custom-select border-danger"
          }
          name="volunteer"
          id="volunteer"
          onChange={handleChange}
          required
        >
          <option>Select...</option>
          <option>Lead Teacher</option>
          <option>Teacher Assistant</option>
          <option>Teacher Trainer</option>
        </select>
        {errors.volunteer && (
          <small className="form-text help">{errors.volunteer}</small>
        )}
      </div>
      <div className="form-group">
        <label className="label">Slack ID:</label>
        <input
          className="form-control"
          type="text"
          name="slack"
          placeholder="slack ID"
          onChange={handleChange}
          value={values.slack || ""}
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
            onChange={handleChange}
            value={values.comment || ""}
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
  );
};

export default SignUp;
