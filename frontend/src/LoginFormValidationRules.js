export default function validate(values) {
  let errors = {};
  if (!values.name) {
    errors.name = "Name is required";
  } else if (values.name.length < 6) {
    errors.name = "Full name has to be more than 6 characters";
  } else if (!/[A-Z][a-zA-Z]/.test(values.name)) {
    errors.name = "Name must contain uppercase";
  }
  if (!values.email) {
    errors.email = "Email is Required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email is invalid";
  }
  if (!values.volunteer) {
    errors.volunteer = "Please select an Option";
  }

  return errors;
}
