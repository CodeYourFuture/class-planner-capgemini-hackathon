import React from "react";
import Add from "./Add";
import EditDelete from "./EditDelete";
import Find from "./Find";
const AddEditDelete = () => {
  return (
    <div>
      <h1> Add/Edit/Delete Page</h1>
      <Add />
      <Find/>
      <EditDelete />
    </div>
  );
};

export default AddEditDelete;
