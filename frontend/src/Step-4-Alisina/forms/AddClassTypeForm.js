import React, { useState } from "react";

const AddClassTypeForm = (props) => {
  const initialFormState = { id: null, classType: "", startTime: "", finishTime:""};
  const [user, setUser] = useState(initialFormState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <form className='form'
      onSubmit={(event) => {
        event.preventDefault();
        if (!user.classType || !user.startTime || !user.finishTime) return;
        props.addUser(user);
        setUser(initialFormState);
      }}
    >
      <label>Class Type</label>
      <input
        type="text" required
        name="classType"
        value={user.classType}
        onChange={handleInputChange}
      />
      <label>Start Time</label>
      <input
        type="time"
        min="09:00"
        max="18:00"
        required
        name="startTime"
        value={user.startTime}
        onChange={handleInputChange}
      />
      <label>Finish Time</label>
      <input
        type="time"
        min="09:00"
        max="18:00"
        required
        name="finishTime"
        value={user.finishTime}
        onChange={handleInputChange}
      />
      <button>Create a new class</button>
    </form>
  );
};

export default AddClassTypeForm;
