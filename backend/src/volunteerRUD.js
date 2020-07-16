import 'dotenv/config';
import cors from 'cors';
import express from 'express';


const app = express();
const weeks = require('../weeks.json')

const bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get('/', (req, res) => {
  return res.send('Hello from the Class PLanner Backend!');
});

// app.get('/volunteer', (req, res) => {
//   return res.send(Object.values(weeks));
// });

// app.get('/volunteer/:number', (req, res) => {
  
// });


app.put('/volunteer/:number', (req, res) => {
  
  const {fullName, email, role, slackId, comments} = req.query; 
  
  const weekSelected = weeks.find(element => element.week === Number(req.params.number))
  
  let volunteers = {}
   
  if(req.query.fullName || req.query.email || req.query.role || req.query.slackId ) {
    volunteers = weekSelected.peopleDetails.find(person => person.fullName === fullName ||
    person.email === email || person.role === role || person.slackId === slackId 
  )}
  if(req.body.FullName) {
    volunteers.fullName = req.body.fullName
  }
  if(req.body.email) {
    volunteers.email = req.body.email
  }
  if(req.body.role) {
    volunteers.role = req.body.role
  }
  if(req.body.slackId) {
    volunteers.slackId = req.body.slackId
  }
  res.json(volunteers);
  })

app.delete('/volunteer/:number', (req, res) => {
  return res.send(`Received a DELETE HTTP method for week number ${req.params.number}`);
});

app.listen(process.env.PORT, () =>
  console.log(`Backend listening on port ${process.env.PORT}!`),
);
