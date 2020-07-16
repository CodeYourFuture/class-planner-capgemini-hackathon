import { useState, useEffect } from "react";

const useForm = (callback, validate) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState({});

  useEffect(() => {
    if (Object.keys(errors.length === 0 && isSubmitting)) {
      callback();
    }
  }, [errors, callback, isSubmitting]);

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    if (values.name === {} && values.email === {} && values.volunteer === {}) {
      setIsSubmitting(false);
    } else {
      setErrors(validate(values));
    }
  };

  const handleChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
  };
  return {
    handleChange,
    handleSubmit,
    values,
    errors,
  };
};

export default useForm;
