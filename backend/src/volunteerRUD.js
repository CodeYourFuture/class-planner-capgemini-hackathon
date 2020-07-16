import 'dotenv/config';
import cors from 'cors';
import express from 'express';
const app = express();
const weeks = require('weeks.json')

const bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get('/', (req, res) => {
  return res.send('Hello from the Class PLanner Backend!');
});

app.put('/volunteer/:number', (req, res) => {
  
  const {fullName, email, role, slackId} = req.query; 
  
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
    const {fullName, email, role, slackId, comments} = req.query; 
    
    const weekSelected = weeks.find(element => element.week === Number(req.params.number))
    
    if (req.body.fullName && req.body.email && req.body.role && req.body.slackId && req.body.comments) {
      res.json(weekSelected.peopleDetails.filter(
        person =>
          person.fullName !== fullName && person.email !== email && person.role !== role 
          && person.slackId !== slackId && person.comments !== comments
      ));
    } else {"Please fill correctly"}
    
  });
  app.use(express.static("public"));

 app.listen(process.env.PORT || 3000);