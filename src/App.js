import React from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Header from "./header";
import Home from "./home";
import About from "./about";
import Skills from "./skills";
import "./css/app.css";
import Works from "./works";

function App() {
  return (
    <Router>
      <div className="app">
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          {/* <Route path="/home">
            <Header />
            <Home />
          </Route> */}
          <Route path="/about">
            <Header />
            <About />
          </Route>
          <Route path="/skills">
            <Header />
            <Skills />
          </Route>
          <Route path="/works">
            <Header />
            <Works />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
