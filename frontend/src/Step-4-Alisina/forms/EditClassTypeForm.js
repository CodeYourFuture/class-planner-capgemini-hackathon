import React, { useState, useEffect } from "react";

const EditClassTypeForm = (props) => {
  const [user, setUser] = useState(props.currentUser);

  useEffect(() => {
    setUser(props.currentUser);
  }, [props]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        props.updateUser(user.id, user);
      }}
    >
      <label>Class Type</label>
      <input
        type="text"
        name="classType"
        value={user.classType}
        onChange={handleInputChange}
      />
      <label>Start Time*:</label>
      <input
        type="time"
        name="startTime"
        value={user.startTime}
        onChange={handleInputChange}
      />
      <label>FinishTime*:</label>
      <input
        type="time"
        name="finishTime"
        value={user.finishTime}
        onChange={handleInputChange}
      />
      <button>Update user</button>
      <button
        onClick={() => props.setEditing(false)}
        className="button muted-button"
      >
        Cancel
      </button>
    </form>
  );
};

export default EditClassTypeForm;
