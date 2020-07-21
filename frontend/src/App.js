import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";

import Navbar from "./Navbar";
import Home from "./Home";
import AddWeek from "./AddEditDelete/AddEditDelete";

import "./App.css";

const App = () => {
  const [weeks, setWeeks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:22666/week")
      .then((res) => res.json())
      .then((data) => {
        setWeeks(data);
      });
  }, []);

  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/add-week" component={AddWeek} />
      </Switch>
    </div>
  );
};

export default App;
