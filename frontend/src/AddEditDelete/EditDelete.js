import React, { useState } from "react";
import style from "./editdelete.module.css";

const EditDelete = (props) => {

  const onClickDelete = (id,event) => {
  event.preventDefault();
    fetch(`http://localhost:22666/week/${id}`, { method: "DELETE" })
      .catch((error) => console.log(error))
      .then((res) => res.json())
      .then()
  };
//  const[seeBody, setSeeBody]=useState([])
//   const handleUpdate=(id)=> {
//     const body = JSON.stringify({
//       props.addedWeek,
//       pro,
//       firstName,
//       surname,
//       email,
//       checkInDate,
//       checkOutDate,
//     });
//     fetch(`http://localhost:22666/week/${id}`, {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body,
//     })
  //     .then((res) => res.json())
  //     .then(data=>{
  //       console.log(data)
  //       setSeeBody(data)});
  // }
  return (
    <div className={style.editdelete}>
      <div>
        <form>
          <div className={style.form}>
            <label>
              Week Number:
              <input
                type="text"
                name="name"
                value={props.addedWeek}
                onChange={(e) => {
                  props.setAddedWeek(e.target.value);
                }}
              />
            </label>
            <label>
              Subject:
              <input
                type="text"
                name="name"
                value={props.addedSubject}
                onChange={(e) => {
                  props.setAddedSubject(e.target.value);
                }}
              />
            </label>
            <label>
              Date:
              <input
                type="text"
                name="name"
                value={props.addedDate}
                onChange={(e) => {
                  props.setAddedDate(e.target.value);
                }}
              />
            </label>
            <label>
              Time:
              <input
                type="text"
                name="name"
                value={props.addedTime}
                onChange={(e) => {
                  props.setAddedTime(e.target.value);
                }}
              />
            </label>
            <label>
              Location:
              <input
                type="text"
                name="name"
                value={props.addedWeekLocation}
                onChange={(e) => {
                  props.setAddedWeekLocation(e.target.value);
                }}
              />
            </label>
          </div>
          <div className={style.button}>
            <input type="submit" value="Submit" />
            <button onClick={() => onClickDelete(props.addedWeek)}>Delete</button>
            {/* <button onClick={() => handleUpdate(props.addedWeek)}>Update</button> */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditDelete;
