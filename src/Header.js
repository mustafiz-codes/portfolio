import React from "react";
import Button from '@material-ui/core/Button';
import Logo from "./images/logo.png";
import './css/style.css';

function Header() {
  return (
    <div className="header">
      <nav class="navbar fixed-top navbar-expand-lg navbar-dark primary-bg">
        <a class="navbar-brand" href="/">
          <img src={Logo} />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link primary-color" href="/about">
                <span className="theme-color">01. </span>About
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link primary-color" href="/skills">
                <span className="theme-color">02. </span>Skills
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link primary-color" href="/works">
                <span className="theme-color">03. </span>Works
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link primary-color" href="#">
                <span className="theme-color">04. </span>Experiences & Achievements
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link primary-color" href="#">
                <span className="theme-color">05. </span>Contacts
              </a>
            </li>
          </ul>
          <Button href="#" target="blank" variant="outlined" color="primary" className="resumeButton">
          resume
        </Button>
          
        </div>
      </nav>
    </div>
  );
}

export default Header;
