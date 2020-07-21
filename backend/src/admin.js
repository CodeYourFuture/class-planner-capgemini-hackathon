import "dotenv/config";
import cors from "cors";
import express from "express";

const app = express();
let weeks = require("../weeks.json");

//show people according to week
app.get("/admin/people/week/:id", (req, res) => {
  const weekId = Number(req.params.id);
  const week = weeks.find((week) => week.week === weekId);
  week ? res.json(week.peopleDetails) : res.sendStatus(404);
});
//show time details according to week
app.get("/admin/time/week/:id", (req, res) => {
  const weekId = Number(req.params.id);
  const week = weeks.find((week) => week.week === weekId);
  week ? res.json(week.timeDetails) : res.sendStatus(404);
});

app.listen(process.env.PORT, () =>
  console.log(`Backend listening on port ${process.env.PORT}!`)
);
