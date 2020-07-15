import React, { useState } from "react";
import style from "./add.module.css";
const Add = () => {
  const [week, setWeek] = useState("");
  const [location, setLocation] = useState("");
  const [dateTime, setDateTime] = useState("");

  const [subject, setSubject] = useState("");

  const locationList = [
    "Central London",
    "Birmingham",
    "Manchester",
    "Glasgow",
  ];
  const weekList = [0, 1, 2, 3, 4, 5];

  const subjectList = ["HTML&CSS", " JS", " React", " Node.js", "MongoDB"];

  function handleWeekChange(event) {
    console.log(event.target.value);
    setWeek(event.target.value);
  }
  function handleDateTimeChange(event) {
    console.log(event.target.value);
    setDateTime(event.target.value);
  }

  function handleLocationChange(event) {
    console.log(event.target.value);
    setLocation(event.target.value);
  }
  function handleSubjectChange(event) {
    console.log(event.target.value);
    setSubject(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const body = JSON.stringify({ week, location, dateTime, subject });

    fetch(`http://localhost:22666/week`, {
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
              <select name="week" onChange={handleWeekChange}>
                {weekList.map((week, index) => (
                  <option key={index} value={week}>
                    {week}
                  </option>
                ))}
              </select>
            </label>
            <label>
              Location:
              <select name="location" onChange={handleLocationChange}>
                {locationList.map((location, index) => (
                  <option key={index} value={location}>
                    {location}
                  </option>
                ))}
              </select>
            </label>
            <label>
              Date and Time
              <input
                type="datetime-local"
                name="meeting-time"
                value={dateTime}
                onChange={handleDateTimeChange}
                min="2018-01-01T00:00"
                max="2020-12-31T00:00"
              />
            </label>
          </div>
          <div>
            <label>
              Subject :
              <select name="subject" onChange={handleSubjectChange}>
                {subjectList.map((subject, index) => (
                  <option key={index} value={subject}>
                    {subject}
                  </option>
                ))}
              </select>
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
