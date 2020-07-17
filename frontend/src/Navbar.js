import React from "react";

const Navbar = () => {
  return (
    <div className="container navbar-section">
      <div className="row margin">
        <img className="col-2 margin" src="cyf-logo.png" alt="Logo" href="/" />
        <div className="col-1"></div>
        <input
          className="col-6 margin form-control"
          type="text"
          placeholder="Search"
          aria-label="Search"
        ></input>
        <div className="col-1"></div>
        <button className="col-2 btn btn-primary margin">Add Week</button>
      </div>
    </div>
  );
};
export default Navbar;
