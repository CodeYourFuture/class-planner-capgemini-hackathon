import React, { useState, useEffect } from "react";
import TimeDetailsPage from "./TimeDetailsPage";
import VolunteersDetails from "./VolunteersDetails";
import InputFields from "./InputFields";
import Navbar from "./Navbar";
import SignUp from "./SignUp";

const DetailsPage = (props) => {
  const [weeks, setWeeks] = useState([]);
  const [addTimeForm, setAddTimeForm] = useState(false);
  const [addSignUpForm, setAddSignUpForm] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:22666/week/${props.match.params.weekNumber}`)
      .then((res) => res.json())
      .then((data) => {
        setWeeks(data);
      });
  }, []);

  const addHandler = () => {
    setAddTimeForm(true);
  };

  const signUpHandler = () => {
    setAddSignUpForm(true);
  };

  return (
    <div>
      <Navbar />
      {weeks &&
        weeks.map((week, index) => {
          console.log(week);
          return (
            <div key={index}>
              <div>
                <div className="container">
                  <div className="card">
                    <div className="card-header padding">
                      <div className="row ">
                        <h3 className="col-sm-9 margin">Week: {week.week}</h3>
                        <div className="col-sm-3 margin">
                          <ul className="week-date-time">
                            <li>{week.location}</li>
                            <li>{week.date}</li>
                            <li>
                              {week.start} - {week.end}
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="card-body">
                      <div className="row">
                        <div className="col">
                          <TimeDetailsPage week={week} />
                        </div>
                        <div className="col">
                          <VolunteersDetails week={week} />
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-3">
                          <button
                            className="btn btn-primary col-12 margin-button"
                            onClick={addHandler}
                          >
                            Add Time
                          </button>
                        </div>
                        <div className="col-3">
                          <a
                            type="button"
                            href={`${week.syllabus}`}
                            className="btn btn-primary col-12 margin-button"
                          >
                            View Syllabus
                          </a>
                        </div>
                        <div className="col-6">
                          <button
                            className="btn btn-success col-12 margin-button"
                            onClick={signUpHandler}
                          >
                            Sign Up
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="card-footer text-muted text-center padding">
                      CODE YOUR FUTURE
                    </div>
                  </div>
                  {addSignUpForm ? (
                    <SignUp session={props.match.params.weekNumber} />
                  ) : null}
                  {addTimeForm ? (
                    <InputFields session={props.match.params.weekNumber} />
                  ) : null}
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default DetailsPage;
