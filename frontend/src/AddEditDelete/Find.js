import React from "react";
import style from "./find.module.css";
const Find = () => {
  return (
    <div className={style.find}>
      <div className={style.header}>
        <h4 className={style.headertext}>Week Finder</h4>
      </div>
      <div className="row search-wrapper">
        <div className="col">
          <form className={style.form}>
            <label>
              Week Number
              <input
                type="text"
               
                 />
            </label>
            <label>
              Subject
              <input
                type="text"
               
              />
            </label>
            <div className={style.button}>
              <button>Find</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Find;
