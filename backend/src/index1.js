// import "dotenv/config";
// import cors from "cors";
// import express from "express";

// const app = express();
// let weeks = require("../weeks.json");
// const bodyParser = require("body-parser");

// app.use(cors());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// app.get("/", (req, res) => {
//   return res.send("Hello from the Class PLanner Backend!");
// });

// //show all weeks
// app.get("/week", (req, res) => {
//   return res.send(Object.values(weeks));
// });

// //show week ID

// app.get("/week/:id", (req, res) => {
//   // const {albumId} = req.params
//   const weekId = Number(req.params.id);
//   const week = weeks.find((week) => week.week === weekId);
//   week ? res.json(week) : res.sendStatus(404);
//   console.log(weekId);
// });

// //Create new week
// app.post("/week/:number", (req, res) => {
//  const newWeek = {
//     week: Number(req.body.week),
//     location: req.body.location,
//     date: req.body.date,
//     start: req.body.start,
//     end: req.body.end,
//     subject: req.body.subject,
//     more: req.body.more
//  }

//   if (
//     //mandatory fields
//     "week" in req.body &&
//     "location" in req.body &&
//     "date" in req.body &&
//     "subject" in req.body
//   ) {
//     weeks.push(newWeek);
//     res.send(
//       `week number ${req.params.number} has been created`
//     );
//   } else {
//     res
//       .status(400)
//       .send(
//         "Please fill the form: week, location, date, subject are mandatory"
//       );
//   }
//   console.log(newWeek);
// });

// app.put("/week/:id", (req, res) => {
//   const weekId = Number(req.params.id);
//   let newWeek = weeks.filter(week =>{
//     return week.week === weekId
//   })[0];

//   const index = weeks.indexOf(newWeek);
  
//   const keys = Object.keys(req.body)
//   keys.forEach(key=>{
// newWeek[key] = req.body[key]
//   });

//   weeks[index]= newWeek;
//   res.json(weeks[index]);
//   return res.send(
//     `Received a PUT HTTP method for week number ${req.params.number}`
//   );
// });

// app.delete("/week/:id", (req, res) => {
//   const weekDelete = Number(req.params.id);
//   weeks = weeks.filter((week) => week.week != weekDelete);
//   res.send(
//     `Received a DELETE HTTP method for week number ${req.params.id}`
//   );
// });

// app.listen(process.env.PORT, () =>
//   console.log(`Backend listening on port ${process.env.PORT}!`)
// );
