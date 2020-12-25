import React from "react";
import "./css/style.css";
import profileImg from "./images/profile.png";

function About() {
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

      <div className="education">
        <h2 className="section-title primary-color">
          Education
        </h2>
        
        <div className="single-degree">
          <h2 className="theme-color degree-title">
            Bechelor of Science
          </h2>
          <h4 className="primary-color degree-institute">
            Leading University, Sylhet
          </h4>
          <p className="secondary-color degree-result"><span className="primary-color">3.57</span> of 4.00</p>
          <p className="primary-color degree-details">
            Four year undergratuation in <span className="theme-color">Computer Science & Engineering</span>. In my undergratutaion I was interested in <span className="theme-color">Computer Programming & Web Development</span> & perticipated in different <span className="theme-color">Hackathon Contest</span>
          </p>
        </div>
        
        <div className="single-degree">
          <h2 className="theme-color degree-title">
            Higher Secondary (H.S.C)
          </h2>
          <h4 className="primary-color degree-institute">
            M.C.College
          </h4>
          <p className="secondary-color degree-result"><span className="primary-color">4.82</span> of 5.00</p>
          <p className="primary-color degree-details">
            Four year undergratuation in <span className="theme-color">Computer Science & Engineering</span>. In my undergratutaion I was interested in <span className="theme-color">Computer Programming & Web Development</span> & perticipated in different <span className="theme-color">Hackathon Contest</span>
          </p>
        </div>
        
        <div className="single-degree">
          <h2 className="theme-color degree-title">
            Secondary (S.S.C)
          </h2>
          <h4 className="primary-color degree-institute">
            Blue Bird High School & College
          </h4>
          <p className="secondary-color degree-result"><span className="primary-color">5.00</span> of 5.00</p>
          <p className="primary-color degree-details">
            Four year undergratuation in <span className="theme-color">Computer Science & Engineering</span>. In my undergratutaion I was interested in <span className="theme-color">Computer Programming & Web Development</span> & perticipated in different <span className="theme-color">Hackathon Contest</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
