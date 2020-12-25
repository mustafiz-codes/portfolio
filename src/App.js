import React from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Works from "./Works";
import "./css/app.css";

function App() {
  return (
    <Router>
      <div className="app">

      <Header />
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          {/* <Route path="/home">
            <Header />
            <Home />
          </Route> */}
          <Route path="/about">
            <About />
          </Route>
          <Route path="/skills">
            <Skills />
          </Route>
          <Route path="/works">
            <Works />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
