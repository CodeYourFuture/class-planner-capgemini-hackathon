import React, { useState } from "react";
import style from "./add.module.css";
const Add = () => {
  const [week, setWeek] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [subject, setSubject] = useState("");
  const [more, setMore] = useState("");
  const locationList = [
    "Central London",
    "Birmingham",
    "Manchester",
    "Glasgow",
  ];
  const weekList = [0, 1, 2, 3, 4, 5];

  const subjectList = ["HTML&CSS", " JS", " React", " Node.js", "MongoDB"];

  function changStartTimeHandler(event) {
    console.log(event.target.value);
    setStart(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    event.target.reset();
    const body = JSON.stringify({
      week,
      location,
      date,
      start,
      end,
      subject,
      more,
    });

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
              <select
                name="week"
                onChange={(event) => setWeek(event.target.value)}
              >
                <option>Week</option>
                {weekList.map((week, index) => (
                  <option key={index} value={week}>
                    {week}
                  </option>
                ))}
              </select>
            </label>
            <label>
              <select
                name="location"
                onChange={(event) => setLocation(event.target.value)}
              >
                <option>Location</option>
                {locationList.map((location, index) => (
                  <option key={index} value={location}>
                    {location}
                  </option>
                ))}
              </select>
            </label>
            <label>
              Date
              <input
                type="date"
                name="date"
                value={date}
                onChange={(event) => setDate(event.target.value)}
                min="2020-01-01"
                max="2020-12-31"
                required
              />
            </label>
            <label>
              Start Time{" "}
              <input
                type="time"
                name="start"
                value={start}
                onChange={changStartTimeHandler}
                min="11:00"
                max="17:00"
                required
              />
            </label>
            <label>
              End Time {""}
              <input
                type="time"
                name="end"
                value={end}
                onChange={(event) => setEnd(event.target.value)}
                min="11:00"
                max="17:00"
                required
              />
            </label>
          </div>
          <div>
            <label>
              <select
                name="subject"
                onChange={(event) => setSubject(event.target.value)}
              >
                <option>Subject</option>
                {subjectList.map((subject, index) => (
                  <option key={index} value={subject}>
                    {subject}
                  </option>
                ))}
              </select>
              <label>Tell us more about yourself</label>

              <textarea
                value={more}
                onChange={(event) => setMore(event.target.value)}
              ></textarea>
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
