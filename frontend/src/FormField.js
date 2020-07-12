import React from "react";
import useForm from "./useForm";
import validate from "./LoginFormValidationRules";
import SignUpButton from "./SignUpButton";
const FormField = () => {
  const { values, errors, handleChange, handleSubmit } = useForm(
    submit,
    validate
  );

  function submit() {
    console.log("No errors, submit callback called!");
  }

  return (
    <div className="section is-fullheight">
      <div className="container">
        <div className="column is-4 is-offset-4">
          <div className="box">
            <form onSubmit={handleSubmit} noValidate>
              <div className="field">
                <label className="label">Full Name*:</label>
                {errors.name && <p className="help is-danger">{errors.name}</p>}
                <div className="control">
                  <input
                    className={`input ${errors.name && "is-danger"}`}
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    onChange={handleChange}
                    value={values.name || ""}
                    required
                  />
                </div>
              </div>

              <div className="field">
                <label className="label">Email Address*:</label>
                {errors.email && (
                  <p className="help is-danger">{errors.email}</p>
                )}
                <div className="control">
                  <input
                    autoComplete="off"
                    className={`input ${errors.email && "is-danger"}`}
                    type="email"
                    name="email"
                    onChange={handleChange}
                    placeholder="Email"
                    value={values.email || ""}
                    required
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Role*:</label>
                {errors.volunteer && (
                  <p className="help is-danger">{errors.volunteer}</p>
                )}
                <div className="control">
                  <select
                    className="dropdown"
                    name="volunteer"
                    id="volunteer"
                    onChange={handleChange}
                    required
                  >
                    <option>select...</option>
                    <option>Lead Teacher</option>
                    <option>Teacher Assistant</option>
                    <option>Teacher trainer</option>
                  </select>
                </div>
              </div>
              <div className="field">
                <label className="label">Slack ID:</label>
                {errors.slack && (
                  <p className="help is-danger">{errors.slack}</p>
                )}
                <div className="control">
                  <input
                    className={`input ${errors.slack && "is-danger"}`}
                    type="text"
                    name="slack"
                    placeholder="slack ID"
                    onChange={handleChange}
                    value={values.slack || ""}
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Comment:</label>
                {errors.comment && (
                  <p className="help is-danger">{errors.comment}</p>
                )}
                <div className="control">
                  <textarea
                    className={`comment ${errors.comment && "is-danger"}`}
                    type="text"
                    name="comment"
                    placeholder="comment"
                    onChange={handleChange}
                    value={values.comment || ""}
                  />
                </div>
              </div>
              <SignUpButton />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormField;
