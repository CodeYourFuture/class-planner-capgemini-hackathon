import React, { useState, useEffect } from "react";
import EachWeek from "./EachWeek";
import Week from "./Week";
import "./App.css";
import "./Week.css";
//import DetailsPage from "./DetailsPage";

class App extends Component {

  const [weeks, setWeeks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:22666/week")
      .then((res) => res.json())
      .then((data) => {
        setWeeks(data);
      });
  }, []);

  render() {
    return (
      <div className="App-header">
        <h1>Code Your Future Class Planner</h1>
        <button className="edit-button">Edit Week/Add Week</button>
        <EachWeek props={this.state.weeks}/>
        <div className="holiday">
          <p>Bank Holiday</p>
          <p>23-Dec</p>
        </div>
      </div>
    </div>
  );
};

export default App;
