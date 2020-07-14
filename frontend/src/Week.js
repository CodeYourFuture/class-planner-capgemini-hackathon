import React from "react";
import Navbar from "./Navbar";
import Weektimelocation from "./Weektimelocation";
import Subject from "./Subject";
import Teacherdetails from "./Teacherdetails";

const Week = () => {
  return (
    <div className="week-container">
      <Navbar />
      <div className="week-teachers">
          <div>
              <Weektimelocation />
              <Subject />
          </div>
          <div>
             <Teacherdetails />  
          </div>
      </div>
     
    </div>
  );
};
export default Week;
