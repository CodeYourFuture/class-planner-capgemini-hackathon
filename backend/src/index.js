import 'dotenv/config';
import cors from 'cors';
import express from 'express';

const app = express();
const weeks = require('../weeks.json')

app.use(cors());


app.get('/', (req, res) => {
  return res.send('Hello from the Class PLanner Backend!');
});

app.get('/week', (req, res) => {
  return res.send(Object.values(weeks));
});

app.get('/week/:number', (req, res) => {
  return res.send(weeks[req.params.number]);
});

app.post('/week/:number', (req, res) => {
  return res.send(`Received a POST HTTP method for week number ${req.params.number}`);
});

app.put('/week/:number', (req, res) => {
  return res.send(`Received a PUT HTTP method for week number ${req.params.number}`);
});

app.delete('/week/:number', (req, res) => {
  return res.send(`Received a DELETE HTTP method for week number ${req.params.number}`);
});

app.listen(process.env.PORT, () =>
  console.log(`Backend listening on port ${process.env.PORT}!`),
);
