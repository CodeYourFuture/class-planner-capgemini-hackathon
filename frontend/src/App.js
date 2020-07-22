import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import AddWeek from "./AddEditDelete/AddEditDelete";
// import SignUp from "./SignUp";
import Add from "./AddEditDelete/Add";
import Find from "./AddEditDelete/Find";
import "./App.css";
import DetailsPage from "./DetailsPage";

const App = () => {
  return (
    <div>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/add-week" component={AddWeek} />
        <Route path="/details/:weekNumber" component={DetailsPage} />
        {/* <Route path="/sign-up" component={SignUp} /> */}
        <Route path="/add" component={Add} />
        <Route path="/edit-delete" component={Find} />
      </Switch>
    </div>
  );
};

export default App;
