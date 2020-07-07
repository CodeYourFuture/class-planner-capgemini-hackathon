({

## Prerequisites

- node 10
- yarn
- firebase cli version 7.3.2 (installed globally)
  On mac:
  `brew install node@10` or `nvm install lts/dubnium`
  `brew install yarn`
  `npm install firebase-tools@7.3.2 -g`
  login to the Firebase CLI tool with `firebase login`

## Getting Started

1. Ask an engineer for the environment variables you'll need!
2. Also ask for the Firebase service account details.
3. Clone the repo
4. yarn
5. yarn bootstrap
6. yarn dev
   })
   **Any further changes will be assign in Trello tickets**

---

# Class-Planner

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

an edit/add(weeks) button for main page:

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

# 3. Details Page:

(detail of each week separately)<br/>
it is a simple _form_ as well with following functionalities:

it should contain just a list of the following information for each week:<br />

- 3 buttons

  1. Join Us
  2. Edit(update AND Cancel(delete))
     **Warning :)**
     **Please Note: this edit is for each week, it is different with edit/add button on main page**
  3. Main Page
  4. Syllabus

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
  **Hint: data will come from form of `join us` button.**

  1. name
     **Note: `it can be more than 1 person for same role` maybe even 5 to 10 teach assistants**
  2. role (it can be like: Lead Teacher: Chris Owen , Teacher Assistant: Your name)

  <!-- - or just holiday(if week was in holiday this page can don't open) -->

**`Emails should not be visible in this stage`, if any one come as admin can see the email. for more details please see 6. Admin Page**
**Note: No one can not pick more than 1 role each time, `but 1 person can enroll 2 times with different roles`**

---

# 4. Edit Each Week Page:

it is a simple _form_ as well with following functionalities:

- this page is accessible with Edit button OF Details page, NOT main page.
- finding the person with name OR email address
- resubmit(edit/put) the information
- delete all data related to this account
- has a warning response before delete
- has a you name successfully deleted message after delete with a OK button
- Ok button will turn him back to Details page
- edit button doesn't has any warning or notification
- has a successfully edited message after editing a with a OK button
- Ok button will turn him back to Details page(same as delete)

---

# 5. Join Us page:

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

---

# 6. Admin page:

- this page should be exactly like Details Page, but emails are visible here
- Admin login can be achieved by passing a parameter to the URL. No security or authorisation is required for this version. (for example: http://www.classplanner.com/`admin` <--)

---

# Stretch Goals

### Deep Linking

- By using a URL like joinaclass.codeyourfuture.com/{CLASS_ID} I should be directed directly to the class in question.

### Multiple Schools

- As an Admin I'd like to be able to host multiple schools under the same website.
  For example, I'd like to have joinaclass.codeyourfuture.com/london and joinaclass.codeyourfuture.com/birmingham as separate pages.

  ### Emailing

- It would be very handy to have a way of emailing all volunteers who are signed up to teach a class.
- A stretch goal for this would be automated emails that get sent out a couple of days before class.
  _Please contact Chris Owen to integrate with our email system._
