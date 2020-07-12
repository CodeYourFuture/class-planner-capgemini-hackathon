import React from "react";
import style from "./add.module.css";
const Add = () => {
  return (
    <div>
      <div className={style.add}>
        <form >
          <label>
            Week:
            <input type="text" name="name" />
          </label>
          <label>
            Location:
            <input type="text" name="name" />
          </label>
          <label>
            Date:
            <input type="text" name="name" />
          </label>
          <label>
            Time :
            <input type="text" name="name" />
          </label>
          <label>
            Subject :
            <input type="text" name="name" />
          </label>
          <input type="submit" value="Save this week" />
          <a href="">Cancel</a>
        </form>
      </div>
    </div>
  );
};
export default Add;
