import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Logo from "./images/logo.png";
import CV from "./images/mustafizur_cv.pdf";
import "./css/style.css";

function Header() {
  return (
    <div className="header">
      <nav class="navbar fixed-top navbar-expand-lg navbar-dark primary-bg">
        <Link className="header-link" to="/">
          <a class="navbar-brand">
            <img src={Logo} />
          </a>
        </Link>
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
            <Link className="header-link" to="/about">
              <li class="nav-item">
                <a class="nav-link primary-color">
                  <span className="theme-color">01. </span>About
                </a>
              </li>
            </Link>

            <Link className="header-link" to="/skills">
              <li class="nav-item">
                <a class="nav-link primary-color">
                  <span className="theme-color">02. </span>Skills
                </a>
              </li>
            </Link>
            <Link className="header-link" to="/works">
              <li class="nav-item">
                <a class="nav-link primary-color">
                  <span className="theme-color">03. </span>Works
                </a>
              </li>
            </Link>
            <Link className="header-link" to="/experiences">
              <li class="nav-item">
                <a class="nav-link primary-color">
                  <span className="theme-color">04. </span>Experiences &
                  Achievements
                </a>
              </li>
            </Link>
            <Link className="header-link" to="/contacts">
              <li class="nav-item">
                <a class="nav-link primary-color" >
                  <span className="theme-color">05. </span>Contacts
                </a>
              </li>
            </Link>
          </ul>
          <div className="nav-button">
          <a href={CV} download="mustafizur_cv.pdf">
            <Button
              target="blank"
              variant="outlined"
              color="primary"
              className="resumeButton"
              type="submit"
            >
              get my cv
            </Button>
            </a>
            </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
