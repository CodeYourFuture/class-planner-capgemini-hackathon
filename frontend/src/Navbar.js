import React from "react";

const Navbar = () => {
  return (
    <div className="container navbar-section">
      <div className="row margin">
        <img className="col-sm-2 logo margin" src="cyf-logo.png" alt="Logo" />
        <div className="col-sm-1"></div>
        <input
          className="col-sm-6 margin form-control"
          type="text"
          placeholder="Search"
          aria-label="Search"
        ></input>
        <div className="col-sm-1"></div>
        <button className="col-sm-2 btn btn-primary margin">
          Add/Edit/Delete
        </button>
      </div>
    </div>
  );
};
export default Navbar;
