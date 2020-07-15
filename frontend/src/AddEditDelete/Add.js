import React, { useState } from "react";
import style from "./add.module.css";
const Add = () => {
  const [week, setWeek] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [subject, setSubject] = useState("");

  const locationList = [
    "Central London",
    "Birmingham",
    "Manchester",
    "Glasgow",
  ];

  function handleWeekChange(event) {
    setWeek(event.target.value);
  }
  function handleDateChange(event) {
    setDate(event.target.value);
  }
  function handleTimeChange(event) {
    setTime(event.target.value);
  }
  function handleLocationChange(event) {
    console.log(event.target.value);
    setLocation(event.target.value);
  }
  function handleSubjectChange(event) {
    setSubject(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const body = JSON.stringify({ week, location, date, time, subject });

    fetch(`http://localhost:22666/week/${week}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body,
    })
      .then((res) => res.json())
      .then();
  }

  return (
    <div>
      <div className={style.add}>
        <form className={style.form} onSubmit={handleSubmit}>
          <div className={style.dateTimeWeeklocation}>
            <label>
              Week:
              <input
                type="text"
                name="week"
                value={week}
                onChange={handleWeekChange}
              />
            </label>
            <label>
              Location:
              <select name="pets" onChange={handleLocationChange}>
                {locationList.map((location, index) => (
                  <option key={index} value={location}>{location}</option>
                ))}
                {/* <option value="Central London">Central London</option>
                <option value="Birmingham">Birmingham</option>
                <option value="Manchester">Manchester</option>
                <option value="Glasgow">Glasgow</option> */}
              </select>
            </label>
            <label>
              Date:
              <input
                type="text"
                name="date"
                value={date}
                onChange={handleDateChange}
              />
            </label>
            <label>
              Time :
              <input
                type="text"
                name="time"
                value={time}
                onChange={handleTimeChange}
              />
            </label>
          </div>
          <div>
            <label>
              Subject :
              <input
                type="text"
                name="subject"
                value={subject}
                onChange={handleSubjectChange}
              />
            </label>
            <div className={style.button}>
              <input type="submit" value="Save this week" />
              <a href="http://localhost:22666">Cancel</a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Add;
