# Class-Planner

**Any further changes will be assign in Trello tickets**

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
- Time in details (
  like this:
  11:30 - 12:00
  12:00 - 14:00
  14:00 - 15:00
  15:00 - 17:00
  )
- For each time(11:30 - 12:00):
  **Hint: data will come from form of `join us` button.**
  1. name
     **Note: `it can be more than 1 person for same role` maybe even 5 to 10 teache assistants**
  2. email address for each person
  3. it can be null sometimes(like lunch time)
  4. class type (like warm up/ )
- a role for everyone(if they add their roles)
<!-- - or just holiday(if week was in holiday this page can don't open) -->

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
   - Lead Teacher 1
   - Lead Teacher 2
   - Teacher Assistant
   - Mentor
4. slack id
5. comments
6. Submit button
7. a message of your name is successfully added and thank you for registering, our community appreciate your helps message with a Ok button,

- ok button will take you back to Details page.
