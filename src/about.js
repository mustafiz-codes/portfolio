import React from "react";
import "./css/style.css";
import profileImg from "./images/profile.png";

function about() {
  return (
    <div className="about">
      <h1 className="section-title primary-color">
        <span className="theme-color">01.</span> About Me
      </h1>

      <div className="row">
        <div className="col-md-4">
          <div className="profile-img">
            <img src={profileImg} />
          </div>
        </div>

        <div className="col-md-8">
          <p className="about-me secondary-color">
            Hello! I'm Mustafiz, a <span className="theme-color">web developer</span> based in Sylhet, Bangladesh.
          </p>
          <p className="about-me secondary-color">
            I enjoy creating things that live on the internet, whether that be
            websites, applications, or anything in between. My goal is to always
            build products that provide pixel-perfect, performant experiences.
          </p>
          <p className="about-me secondary-color">
            Shortly after graduating from Leading University now I am looking
            forword to start my carrer as a software engineer.
          </p>
          <p className="about-me secondary-color">Interested In:</p>
          <ul className="row">
            <div className="col-md-3">
              <li className="theme-color">Sports</li>
              <li className="theme-color">Travel</li>
            </div>
            <div className="col-md-3">
              <li className="theme-color">Food</li>
              <li className="theme-color">Video Gaming</li>
            </div>
            <div className="col-md-3">
              <li className="theme-color">Technology</li>
              <li className="theme-color">Gardening</li>
            </div>
            <div className="col-md-3">
              <li className="theme-color">Swimming</li>
              <li className="theme-color">Sleeping</li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default about;
