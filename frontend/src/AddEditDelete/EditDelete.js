import React from "react";
import style from "./editdelete.module.css";
const EditDelete = () => {
  return (
    <div className={style.editdelete}>
      <div className="page-header">
        <h4 className="text-left">Week Finder</h4>
      </div>
      <div>
        <form>
          <div className={style.editdelete}>
            <label>
              Week Number:
              <input type="text" name="name" />
            </label>
            <label>
              Subject:
              <input type="text" name="name" />
            </label>
            <label>
              Date:
              <input type="text" name="name" />
            </label>
            <label>
              Time:
              <input type="text" name="name" />
            </label>
            <label>
              Location:
              <input type="text" name="name" />
            </label>
          </div>
          <div>
            <input type="submit" value="Submit" />
            <button>Delete</button>
          </div>
        </form>
      </div>
    </div>
  );
};
//test
export default EditDelete;
