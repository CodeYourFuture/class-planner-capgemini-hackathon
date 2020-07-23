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
//show people according to week
app.get("/admin/people/week/:id", (req, res) => {
  const weekId = Number(req.params.id);
  const week = weeks.find((week) => week.week === weekId);
  week ? res.json(week.peopleDetails) : res.sendStatus(404);
  // return res.send(Object.values(weeks));
});
//show time details according to week
app.get("/admin/time/week/:id", (req, res) => {
  const weekId = Number(req.params.id);
  const week = weeks.find((week) => week.week === weekId);
  week ? res.json(week.timeDetails) : res.sendStatus(404);
  // return res.send(Object.values(weeks));
});

//week numbers
app.get("/week/:number", (req, res) => {
  const weekNumber = Number(req.params.number);
  const selectedWeek = weeks.filter((week) => week.week === weekNumber);

  if (selectedWeek) {
    res.json(selectedWeek);
  } else {
    res.status(400).send("Week not found");
  }
});

//show week ID

// app.get("/week/:id", (req, res) => {
//   // const {albumId} = req.params
//   const weekId = id(req.params.id);
//   const week = weeks.find((week) => week.week === weekId);
//   week ? res.json(week) : res.sendStatus(404);
//   console.log(weekId);
// });

//Create new week
app.post("/week/:id", (req, res) => {
  const newWeek = {
    week: Number(req.body.week),
    location: req.body.location,
    date: req.body.date,
    start: req.body.start,
    end: req.body.end,
    module: req.body.module,
    more: req.body.more,
  };

  if (
    //mandatory fields
    "week" in req.body &&
    "location" in req.body &&
    "date" in req.body &&
    "module" in req.body
  ) {
    weeks.push(newWeek);

    res.send(`week id ${req.params.id} has been created`);
  } else {
    res
      .status(400)
      .send("Please fill the form: week, location, date, module are mandatory");
  }
  console.log(newWeek);
});

app.put("/week/:id", (req, res) => {
  const weekId = Number(req.params.id);
  let newWeek = weeks.filter((week) => {
    return week.week === weekId;
  })[0];

  const index = weeks.indexOf(newWeek);

  const keys = Object.keys(req.body);
  keys.forEach((key) => {
    newWeek[key] = req.body[key];
  });

  weeks[index] = newWeek;
  res.json(weeks[index]);
  return res.send(`Received a PUT HTTP method for week id ${req.params.id}`);
});

app.delete("/week/:id", (req, res) => {
  const weekDelete = id(req.params.id);
  weeks = weeks.filter((week) => week.week != weekDelete);
  res.send(`Received a DELETE HTTP method for week id ${req.params.id}`);
});

//last change:
app.get("/week/:number/class", (req, res) => {
  const { number, start, end, type } = req.query;
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
          session.number === number ||
          session.type === type ||
          session.start === start ||
          session.end === end
      )
    );
  } else {
    res.sendStatus(404);
  }
});

app.post("/week/addsession/:number/class", (req, res) => {
  let { start, end, type } = req.body;
  const weekNumber = Number(req.params.number);
  const selectedWeek = weeks.find((week) => week.week === weekNumber);
  const newId = selectedWeek.timeDetails.length;
  const checkId = selectedWeek.timeDetails.find(
    (session) => session.id === newId
  );
  if (checkId) {
    newId++;
  } else {
    if (start || end || type) {
      req.body.id = newId;
      selectedWeek.timeDetails.push(req.body);
      res.status(201).send("New session successfully added");
    } else {
      res.send("Please fill the form");
    }
  }
});

app.get("/week/:number/volunteer", (req, res) => {
  const { id, fullName, email, role, slackId, comments } = req.query;
  const weekNumber = Number(req.params.number);
  const selectedWeek = weeks.find((week) => week.week === weekNumber);
  // After posting a session, this sorts the sessions by start time
  const sortedVolunteerDetails = selectedWeek.peopleDetails.sort((a, b) =>
    a.start > b.start ? 1 : -1
  );
  res.json(sortedVolunteerDetails);
  if (req.query.type || req.query.start || req.query.end) {
    res.json(
      selectedWeek.peopleDetails.find(
        (volunteer) =>
          volunteer.id === id ||
          volunteer.fullName === fullName ||
          volunteer.email === email ||
          volunteer.role === role ||
          volunteer.slackId === slackId ||
          volunteer.comments === comments
      )
    );
  } else {
    res.sendStatus(404);
  }
});

app.get("/week/:number/class/:id", (req, res) => {
  const weekNumber = Number(req.params.number);
  const selectedWeek = weeks.find((week) => week.week === weekNumber);
  const selectedSession = selectedWeek.timeDetails.find(
    (session) => session.id === Number(req.params.id)
  );
  console.log(selectedSession);
  res.json(selectedSession);
});

// app.post("/week/:id/class", (req, res) => {
//   const weekId = Number(req.params.id);
//   const selectedWeek = weeks.find((week) => week.week === weekId);
//   if (req.body.start && req.body.end && req.body.type) {
//     res.send("this class is created");
//     selectedWeek.timeDetails.push(req.body);
//   } else {
//     res.send("Please fill the form");
//   }
// });

app.get("/week/:number/volunteer/:id", (req, res) => {
  const weekNumber = Number(req.params.number);
  const selectedWeek = weeks.find((week) => week.week === weekNumber);
  const selectedVolunteer = selectedWeek.peopleDetails.find(
    (volunteer) => volunteer.id === Number(req.params.id)
  );
  console.log(selectedVolunteer);
  res.json(selectedVolunteer);
});

app.post("/week/:id/volunteer", (req, res) => {
  const weekId = Number(req.params.id);
  const { id, fullName, email, role } = req.params;
  const selectedWeek = weeks.find((week) => week.week === weekId);
  if (id && fullName && email && role) {
    res.send("Volunteer added");
    selectedWeek.peopleDetails.push(req.body);
  } else {
    res.send("Please fill the missing inputs");
  }
});

app.put("/week/:number/volunteer/:id", (req, res) => {
  const { id, fullName, email, role, slackId, comments } = req.body;
  const weekNumber = Number(req.params.number);
  const volunteerId = Number(req.params.id);
  const selectedWeek = weeks.find((week) => week.week === weekNumber);
  let volunteer = {};
  if (volunteerId) {
    volunteer = selectedWeek.peopleDetails.find(
      (volunteer) => volunteer.id === volunteerId
    );
  }
  if (req.body.id) {
    volunteer.id = id;
  }
  if (req.body.fullName) {
    volunteer.fullName = fullName;
  }
  if (req.body.email) {
    volunteer.email = email;
  }
  if (req.body.role) {
    volunteer.role = role;
  }
  if (req.body.slackId) {
    volunteer.slackId = slackId;
  }
  if (req.body.comments) {
    volunteer.comments = comments;
  }
  res.json(volunteer);
});

app.put("/week/:number/class/:id", (req, res) => {
  const weekNumber = Number(req.params.number);
  const sessionId = Number(req.params.id);

  const selectedWeek = weeks.find((week) => week.week === weekNumber);

  let session = {};
  if (sessionId) {
    session = selectedWeek.timeDetails.find(
      (session) => session.id === sessionId
    );
  }
  if (req.body.id) {
    session.id = req.body.id;
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
app.delete("/week/:number/volunteer/:id", (req, res) => {
  const weekNumber = Number(req.params.number);
  const volunteerId = Number(req.params.id);
  const selectedWeek = weeks.find((week) => week.week === weekNumber);
  const newPeopleDetails = selectedWeek.peopleDetails.filter(
    (volunteer) => volunteer.id !== volunteerId
  );
  if (newPeopleDetails) {
    return (weeks[weekNumber].peopleDetails = newPeopleDetails);
  }
  res.json(weeks);
});

app.delete("/week/:number/class/:id", (req, res) => {
  const weekNumber = Number(req.params.number);
  const sessionId = Number(req.params.id);

  const selectedWeek = weeks.find((week) => week.week === weekNumber);

  const updatedSession = selectedWeek.timeDetails.filter(
    (session) => session.id !== sessionId
  );
  if (updatedSession) {
    return (weeks[weekNumber].timeDetails = updatedSession);
  }
  res.send(`Session is updated`);
});

app.listen(process.env.PORT, () =>
  console.log(`Backend listening on port ${process.env.PORT}!`)
);
