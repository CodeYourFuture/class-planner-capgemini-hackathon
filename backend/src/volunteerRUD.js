import 'dotenv/config';
import cors from 'cors';
import express from 'express';

const app = express();
const weeks = require('../weeks.json')

app.use(cors());


app.get('/', (req, res) => {
  return res.send('Hello from the Class PLanner Backend!');
});

app.get('/volunteer', (req, res) => {
  return res.send(Object.values(weeks));
});

app.get('/volunteer/:number', (req, res) => {
  return res.send(weeks[req.params.number]);
});


app.put('/volunteer/:number', (req, res) => {
  return res.send(`Received a PUT HTTP method for week number ${req.params.number}`);
});

app.delete('/volunteer/:number', (req, res) => {
  return res.send(`Received a DELETE HTTP method for week number ${req.params.number}`);
});

app.listen(process.env.PORT, () =>
  console.log(`Backend listening on port ${process.env.PORT}!`),
);
