import React from "react";
import Add from "./Add";
import Find from "./Find";
import Navbar from "../Navbar";

const AddEditDelete = () => {
  return (
    <div>
      <Navbar />
      <h1> Add/Edit/Delete Class</h1>
      <Add />
      <Find />
    </div>
  );
};

export default AddEditDelete;
