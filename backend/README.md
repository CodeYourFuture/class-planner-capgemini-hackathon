# Class Planner - Backend

In order to run the app, run these commands from the `./backend` directory:
-   npm install
-   npm start

This will start a server on port 22666 (or whatever port is specified in `.env`)

## Resources

### Week
Calling `/week` will return all of the information in the `weeks.json` file

Adding a specific week number will return the information for that week, eg:
`GET /week/1`
returns
```{
    "week": 0,
    "location": "Central London",
    "date": "02-Dec-2019",
    "start": "11 am",
    "end": "5:30 pm",
    "subject": "intro",
    "more": "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form,",
    "timeDetails": [
      {
        "start": "11:00",
        "end": "11:30",
        "type": "Stand up"
      },
      {
        "start": "11:30",
        "end": "14:00",
        "type": "Intro"
      },
      {
        "start": "14:00",
        "end": "15:00",
        "type": "Lunch"
      },
      {
        "start": "15:00",
        "end": "17:00",
        "type": "Soft skills workshop"
      },
      {
        "start": "17:00",
        "end": "17:30",
        "type": "Retro and clean up"
      }
    ],
    "peopleDetails": [
      {
        "fullName": "Chris Owen",
        "email": "example@example.com",
        "role": "Lead Teacher",
        "slackId": "Chris",
        "comments": "so cool"
      },
      {
        "fullName": "Ali Smith",
        "email": "example@example.com",
        "role": "Teacher Assistant",
        "slackId": "Chris",
        "comments": "so cool"
      },
      {
        "fullName": "Dom Vinyard",
        "email": "example@example.com",
        "role": "Teacher trainer",
        "slackId": "Chris",
        "comments": "so cool"
      }
    ]
  }```

There are placeholders for PUT, POST and DELETE endpoints too which will be enhanced to support basic CRUD operations.
C for Create: HTTP POST
R for Read: HTTP GET
U for Update: HTTP PUT
D for Delete: HTTP DELETE
