import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import Header from './Header';
import Home from './Home';
import About from "./About";
import Skills from "./Skills";
import "./css/app.css";
import Works from "./Works";


function App() {
  return (
    <Router>
      <div className="app">
      <Header/>


        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/Home">
            <Home />
          </Route>
          <Route path="/About">
            <About />
          </Route>
          <Route path="/Skills">
            <Skills />
          </Route>
          <Route path="/Works">
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
