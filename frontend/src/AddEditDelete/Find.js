import React from "react";
import style from "./find.module.css";
const Find = () => {
  return (
    <div className="search">
      <div className="page-header">
        <h4 className="text-left">Week Finder</h4>
      </div>
      <div className="row search-wrapper">
        <div className="col">
          <form className="form-group search-box">
            <label htmlFor="customerName">Week Number</label>
            <div className="search-row">
              <input
                type="text"
                id="customerName"
                className="form-control"
                placeholder="Customer name"
                value=""
              />
            </div>
            <label htmlFor="customerName">Subject</label>
            <div className="search-row">
              <input
                type="text"
                id="customerName"
                className="form-control"
                placeholder="Customer name"
                value=""
              />
            </div>
            <div>
              <button className="btn btn-primary">Find</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Find;
