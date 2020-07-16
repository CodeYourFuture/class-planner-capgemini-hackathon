const dotenv = require("dotenv/config");
const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const weeks = require("../weeks.json");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.get("/week/:number/class", (req, res) => {
  const { start, end, type } = req.query;
  const weekNumber = Number(req.params.number);
  const selectedWeek = weeks.find((week) => week.week === weekNumber);
  // After posting a session, this sorts the sessions by start time
  const sortedTimeDetails = selectedWeek.timeDetails.sort((a, b) =>
    a.start > b.start ? 1 : -1
  );
  res.json(sortedTimeDetails);
  if (req.query.type || req.query.start || req.query.end) {
    res.json(
      selectedWeek.timeDetails.find(
        (session) =>
          session.type === type ||
          session.start === start ||
          session.end === end
      )
    );
  } else {
    res.sendStatus(404);
  }
});
app.post("/week/:number/class", (req, res) => {
  const weekNumber = Number(req.params.number);
  const selectedWeek = weeks.find((week) => week.week === weekNumber);
  if (req.body.start && req.body.end && req.body.type) {
    selectedWeek.timeDetails.push(req.body);
  } else {
    res.send("Please fill the form");
  }
});
//To Edit a session (Save Changes Button)
app.put("/week/:number/class", (req, res) => {
  const { start, end, type } = req.query;
  const weekNumber = Number(req.params.number);
  const selectedWeek = weeks.find((week) => week.week === weekNumber);
  let session = {};
  if (req.query.type || req.query.start || req.query.end) {
    session = selectedWeek.timeDetails.find(
      (session) =>
        session.type === type || session.start === start || session.end === end
    );
  }
  if (req.body.type) {
    session.type = req.body.type;
  }
  if (req.body.start) {
    session.start = req.body.start;
  }
  if (req.body.end) {
    session.end = req.body.end;
  }
  res.json(session);
});
app.delete("/week/:number/class", (req, res) => {
  const { start, end, type } = req.body;
  const weekNumber = Number(req.params.number);
  const selectedWeek = weeks.find((week) => week.week === weekNumber);
  if (req.body.type && req.body.start && req.body.end) {
    res.json(
      selectedWeek.timeDetails.filter(
        (session) =>
          session.type !== type &&
          session.start !== start &&
          session.end !== end
      )
    );
  } else {
    ("Session not found");
  }
});
app.listen(process.env.PORT, () =>
  console.log(`Backend listening on port ${process.env.PORT}!`)
);
