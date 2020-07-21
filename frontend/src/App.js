import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import AddWeek from "./AddEditDelete/AddEditDelete";
import SignUp from "./SignUp";
import "./App.css";
import DetailsPage from "./DetailsPage";

const App = () => {
  return (
    <div>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/add-week" component={AddWeek} />
        <Route path="/sign-up" component={SignUp} />
        <Route path="/details" component={DetailsPage} />

      </Switch>
    </div>
  );
};

export default App;
