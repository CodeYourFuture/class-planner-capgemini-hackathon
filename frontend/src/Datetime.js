import React, {useState, useEffect} from "react";
import  "./Datetime.css";
const Datetime = ()=>{
const [startTime, setStartTime]= useState("");
const [finishTime, setFinishTime] = useState("");
const [classType, setClassType] = useState("");

const handleAddNew = () => {
  fetch(, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      
    }),
  })
    .then((res) => res.json())
    .then(() => {
      console.log("Data added");
    });
};

return (
  <form className="form-datetime">
    <div>
      <label>Start Time:</label>
      <input type="text" value="" />
    </div>
    <div>
      <label>Finish Time:</label>
      <input type="text" value="" />
    </div>
    <div>
      <label>Class Type:</label>
      <input type="text" value="" />
    </div>
    <button className="btn-date-time" type="submit">
      Add to Timetable
    </button>
  </form>
);

}
export default Datetime;