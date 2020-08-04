# Class-Planner

---

## Prerequisites

- node
- React
- join the Trello group of this project []
- clone project from [https://github.com/codeyourfuture/class-planner]
- make your own branch
- take a look which parts are doing by others so prevent conflicts
- make you own ticket and assign yourself and anyone else you need

---

**Any further changes will be assign in Trello tickets**

## Getting Started

- to build your frontend, navigate to frontend (`cd frontend`) folder and run `npm install` and `npm start`

---

# 1. Main page

Here you can find the data needed on the first page;

## on the [left side]:

## week

The name "week" can be hard coded but the number of weeks should be editable<br />
it would be better if we can edit it by a _form_

## Time-Date-Location

these initial data can be smaller in size, in nice place to read but not as the main content<br />
The numbers would be better if we can edit it by a _form_

## Subject

This is the main content of each week<br />
It can own another paragraph for more details or not

IF we have more details it should be smaller in size<br />

## Buttons

We have 2 buttons, each one will bring us in a new page

One for details of that specific week's detail **Note: I called it `Details`, you can rename it!**<br />
the other one is for volunteers Registration **Note: I called it `Join Us`, you can rename it!!**

### On the right side

**Note: This is for `owners` to see if there is enough volunteers for each post or not!**

so it is not important to write "Lead Teacher" or "Teacher Assistant"<br />
the idea is : on the first sight they can detect if there are enough assistants or not.<br />
it can just don't show anything if there isn't any one on that role!<br />
**Note: It could be as many as possible for TA's so my personal recommendation is to use number for TA's and mentors!**
Lead Teacher is just one person.

### Top right or top left:

## an edit/add(weeks) button for main page:

# Backend <br />

_this page will not provide any data for backend (it's just data user)_

---

# 2. Edit/add(weeks) page:

- add weeks in order by number , if the numbers are same in order by the number after dot ".":
  1. 0
  2. 0.1
  3. 0.2
  4. 1
  5. 2
- add or remove each week
- add Date, location, time(start and end, not in details) for each week
- write Subject for Each week
- more information about subject
- can add more than one week each time (send just a success message don't reload the page.)
- find each week with the number of the week
- show the information of each week `with the name of volunteers`
- ability of edit just these information (weeks, location, data, time, subject. NOT each day's details)
- a button to come back to main page

---

# Backend : <br/>

we are going to receive these data from a submit form with following information:

- Week : number ("week": 0, or "week": "0") // **essential to make a week**
- location
- date
- time -> start - end
- subject **essential to make a week**

**to find each week for edit or delete we are going to find week with: number of week OR subject**

---

# 3. Details Page:

(detail of each week separately)<br/>
it is a simple _form_ as well with following functionalities:

it should contain just a list of the following information for each week:<br />

- 3 buttons

  1. Add/edit/delete (Time)
  2. Syllabus
     **Warning :)**
     **Please Note: this edit is for each week, it is different with edit/add button on main page**
  3. Home
  4. Sign up
  5. Edit/delete (volunteer)

  **then two columns with**

- Time in details (
  like this:
  11:30 - 12:00
  12:00 - 14:00
  14:00 - 15:00
  15:00 - 17:00
  )
  and the duty for each time (11:30 - 12:00 - Standup)(11:30 - 14:00 - React)
  in first column,
- for the second column
  **Hint: data will come from form of `Add/Edit/Delete (time)` button.**

  1. name
     **Note: `it can be more than 1 person for same role` maybe even 5 to 10 teach assistants**
  2. role (it can be like: Lead Teacher: Chris Owen , Teacher Assistant: Your name)

  <!-- - or just holiday(if week was in holiday this page can don't open) -->

**`Emails should not be visible in this stage`, if any one come as admin can see the email. for more details please see 6. Admin Page**
**Note: No one can not pick more than 1 role each time, `but 1 person can enroll 2 times with different roles`**

---

# Backend <br />

_this page is a data user_

---

# 4. Add/Edit/delete(time):

it is a simple _form_ as well with following functionalities:

- this page is accessible with Add/Edit/Delete button OF Details page, (NOT main page).
- here we have two components:
  1. Time and Class Type
  - start time with text input **essential**
  - end time with text input **essential**
  - class type with text input **essential**
  2.  Finder of timetable details
  - start time with text input
  - end time with text input
  - class type with tex input
- finding the time with start time OR finish time OR class type
- then it will a new component will appear with details (if existed)
  **if it's not existed it needs to show an alert message to say it's not existed**
- the component has two buttons:
  - Apply
  - Delete
- delete all data related to this time
- has a warning response before delete
- has a you time successfully deleted message after delete with a OK button
- Ok button will turn him back to Details page
- has a successfully edited message after editing a with a OK button
- Ok button will turn him back to Details page(same as delete)

---

# Backend <br />

we are going to receive/edit/delete these data from a submit form with following information:

- start time **essential to add**
- end time **essential to add**
- class type **essential to add**

**we can find it with each of above details**
then we need to be able to edit and delete as well

---

# 5. Edit/delete (volunteer)

it is a simple _form_ as well with following functionalities:

- this page is accessible with Edit/delete (volunteer) button OF Details page, (NOT main page).
- finding the person with name OR email address
- resubmit(edit/put) the information
- delete all data related to this account
- has a warning response before delete
- has a your name successfully deleted message after delete with a OK button
- Ok button will turn him back to Details page
- edit button doesn't has any warning or notification
- has a successfully edited message after editing a with a OK button
- Ok button will turn him back to Details page(same as delete)

---

# Backend

we are going to edit/delete these data from a submit form with following information:

- name OR email address

we need responses if we found data or not
we need responses if we edited successfully or not
we need responses if we deleted successfully or not

we need access to these data for edit:

- full name
- email address
- role
- slack id (if existed)
- any comments they wrote

---

# 6. Sign up page:

it is just a simple register _form_ where we ask them to fill some data:

1. name **essential**
2. email address **essential**
3. choose role from drop down menu **essential**
   - Coordinator
   - Lead Teacher
   - Assistant Lead Teacher
   - Teaching Assistant
   - Personal Development Rep
4. slack id
5. comments
6. Submit button
7. a message of your name is successfully added and thank you for registering, our community appreciate your helps message , _please read these links before class_ with a Ok button.

- ok button will take you back to Details page.

# Backend

we will receive data from a submit form with following data:

- Full name **essential**
- Email **essential**
- Role **essential**
- Slack ID
- comments

we are going to have a [very important response message with some links for volunteers to read before class, please get in touch with me //Bani to get information of that response _thank you in advance_]

---

# 7. Admin page:

- this page should be exactly like Details Page, but emails are visible here
- Admin login can be achieved by passing a parameter to the URL. No security or authorisation is required for this version. (for example: http://www.classplanner.com/`admin` <--)

# Backend <br />

- we need a page with data of details page but with query of /admin ro implement this page.

---

# Stretch Goals

### (Backend / Frontend)

### Deep Linking

- By using a URL like joinaclass.codeyourfuture.com/{CLASS_ID} I should be directed directly to the class in question.

### Multiple Schools

- As an Admin I'd like to be able to host multiple schools under the same website.
  For example, I'd like to have joinaclass.codeyourfuture.com/london and joinaclass.codeyourfuture.com/birmingham as separate pages.

  ### Emailing

- It would be very handy to have a way of emailing all volunteers who are signed up to teach a class.
- A stretch goal for this would be automated emails that get sent out a couple of days before class.
  _Please contact Chris Owen to integrate with our email system._
