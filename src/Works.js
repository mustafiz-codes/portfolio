import React from "react";
import NetflixImage from "./images/netflix.png";
import AmazonImage from "./images/amazon.png";
import MyriannImage from "./images/myriann.png";
import AirbnbImage from "./images/airbnb.png";

function Works() {
  return (
    <div className="works">
      <h1 className="section-title primary-color">
        <span className="theme-color">03.</span> Works
      </h1>

      <div className="single-work">
        <h2 className="work-title theme-color">Netflix-clone</h2>
        <div className="row flex-rev">
          <div className="col-md-5">
            <p className="work-details secondary-color">
              Significant Features of Netflix Clone Script. Practiced api
              integration & user interface building with react.js also showed
              the videos trailer of all movies.
            </p>
            <ul className="technology primary-color">
              <li>React Js</li>
              <li>TMDB API</li>
              <li>API Integration</li>
            </ul>
            <p className="viewProject">
              <a
                target="blank"
                href="https://mustafiz-codes.github.io/netflix-clone-react/"
              >
                View Project
              </a>
            </p>
          </div>
          <div className="col-md-7">
            <img className="work-img" src={NetflixImage} />
          </div>
        </div>
      </div>

      <div className="single-work">
        <h2 className="work-title theme-color">Amazon-clone</h2>
        <div className="row">
          <div className="col-md-7">
            <img className="work-img" src={AmazonImage} />
          </div>
          <div className="col-md-5">
            <p className="work-details secondary-color">
              A react based webapp where I practiced react state management to
              get & set data. I implemented add-to-cart with react.js
            </p>
            <ul className="technology primary-color">
              <li>React Js</li>
              <li>State Management</li>
              <li>Material Ui</li>
            </ul>
            <p className="viewProject">
              <a
                target="blank"
                href="https://mustafiz-codes.github.io/amazon-clone/"
              >
                View Project
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="single-work">
        <h2 className="work-title theme-color">Myriann</h2>
        <div className="row flex-rev">
          <div className="col-md-5">
            <p className="work-details secondary-color">
              A client project where i developed all the user interface &
              transition using html, css, bootstrap. Its fully responsive.
            </p>
            <ul className="technology primary-color">
              <li>HTML</li>
              <li>CSS</li>
              <li>Bootstrap</li>
              <li>Aos</li>
            </ul>
            <p className="viewProject">
              <a
                target="blank"
                href="https://mustafiz-codes.github.io/myriann-client/"
              >
                View Project
              </a>
            </p>
          </div>
          <div className="col-md-7">
            <img className="work-img" src={MyriannImage} />
          </div>
        </div>
      </div>

      <div className="single-work">
        <h2 className="work-title theme-color">Airbnb-clone</h2>
        <div className="row">
          <div className="col-md-7">
            <img className="work-img" src={AirbnbImage} />
          </div>
          <div className="col-md-5">
            <p className="work-details secondary-color">
              A react based airbnb clone Ui where material UI implemented.
            </p>
            <ul className="technology primary-color">
              <li>React Js</li>
              <li>Material Ui</li>
            </ul>
            <p className="viewProject">
              <a
                target="blank"
                href="https://mustafiz-codes.github.io/airbnb-clone/"
              >
                View Project
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Works;
