import "dotenv/config";
import cors from "cors";
import express from "express";

const app = express();
let weeks = require("../weeks.json");
const bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  return res.send("Hello from the Class PLanner Backend!");
});

//show all weeks
app.get("/week", (req, res) => {
  return res.send(Object.values(weeks));
});

//show week ID
app.get("/week/:number", (req, res) => {
  const weekId = weeks[req.params.week];
  const findWeek = weeks.find((week) => week.week === weekId);
  findWeek ? res.send(findWeek) : res.status(404).send("ID not found");
});

app.post("/week/:number", (req, res) => {
 const newWeek = {
    week: Number(req.body.week),
    location: req.body.location,
    date: req.body.date,
    start: req.body.start,
    end: req.body.end,
    subject: req.body.subject,
    more: req.body.more
 }

  if (
    //mandatory fields
    "week" in req.body &&
    "location" in req.body &&
    "date" in req.body &&
    "subject" in req.body
  ) {
    weeks.push(newWeek);
    res.send(
      `week number ${req.params.number} has been created`
    );
  } else {
    res
      .status(400)
      .send(
        "Please fill the form: week, location, date, subject are mandatory"
      );
  }
  console.log(newWeek);
});

app.put("/week/:number", (req, res) => {
  return res.send(
    `Received a PUT HTTP method for week number ${req.params.number}`
  );
});

app.delete("/week/:number", (req, res) => {
  const weekDelete = weeks[req.params.week];
  weeks = weeks.filter((week) => week.week != weekDelete);
  console.log(weeks[req.params]);
   res.send(
    `Received a DELETE HTTP method for week number ${req.params.number}`
  );
});

app.listen(process.env.PORT, () =>
  console.log(`Backend listening on port ${process.env.PORT}!`)
);
