import React from "react";
import NetflixImage from "./images/netflix.png";
import AmazonImage from "./images/amazon.png";
import MyriannImage from "./images/myriann.png";
import AirbnbImage from "./images/airbnb.png";

function works() {
  return (
    <div className="works">
      <h1 className="section-title primary-color">
        <span className="theme-color">03.</span> Works
      </h1>
      
      
      <div className="single-work">
        <h2 className="work-title theme-color">Netflix-clone</h2>
        <div className="row">
          <div className="col-md-5">
            <p className="work-details secondary-color">
              Significant Features of Netflix Clone Script. User Registration.
              Payment Gateway. User profile. Content search. Push Notifications.
              Settings. Multiple language support. Admin panel or Admin
              Dashboard
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
              Significant Features of Netflix Clone Script. User Registration.
              Payment Gateway. User profile. Content search. Push Notifications.
              Settings. Multiple language support. Admin panel or Admin
              Dashboard
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
          
        </div>
      </div>
      
      
      <div className="single-work">
        <h2 className="work-title theme-color">Myriann</h2>
        <div className="row">
          <div className="col-md-5">
            <p className="work-details secondary-color">
              Significant Features of Netflix Clone Script. User Registration.
              Payment Gateway. User profile. Content search. Push Notifications.
              Settings. Multiple language support. Admin panel or Admin
              Dashboard
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
              Significant Features of Netflix Clone Script. User Registration.
              Payment Gateway. User profile. Content search. Push Notifications.
              Settings. Multiple language support. Admin panel or Admin
              Dashboard
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
          
        </div>
      </div>
    </div>
  );
}

export default works;
