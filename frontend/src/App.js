import React, { Component } from "react";
import EachWeek from "./EachWeek";
import Week from "./Week";
import "./App.css";
import "./Week.css";
//import DetailsPage from "./DetailsPage";

class App extends Component {

  constructor(props) {
    super(props);
 
    this.state = {
      weeks: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:22666/week')
    .then(res => res.json())
    .then((data) => {
      this.setState({ weeks: data })
    })
    .catch(console.log)
  };

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
    );
  }

}

export default App;
