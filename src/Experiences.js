import React from "react";

function Experiences() {
  return (
    <div className="experiences">
      <h1 className="section-title primary-color">
        <span className="theme-color">04.</span> Experiences & Achievements
      </h1>

      <div className="job-experience">
          <h2 className="sub-title secondary-color">Work History</h2>
        <div className="single-experience">
          <h2 className="job-title primary-color">Web Developer</h2>
          <h4 className="job-company theme-color"> TeamFlyBD</h4>
          <p className="job-duration theme-color">
            January 2019 - December 2019
          </p>
          <p className="job-responsibility secondary-color">
            A part time job as a student, where my key role was to develop user
            interface for local clients using HTML, CSS, Javascript, Jquery &
            Bootstrap. In addition I also tested bugs for web applications.
          </p>
        </div>
      </div>

      <div className="achievements">
        <h2 className="sub-title primary-color">
          Achievements & Participations
        </h2>
        <div className="single-achievement">
          <h2 className="achievement-position primary-color">Champion</h2>
          <p className="achievement-event theme-color">
            SJ Innovation Hackathon, 2020
          </p>
        </div>
        <div className="single-achievement">
          <h2 className="achievement-position primary-color">Mantioned on top 5</h2>
          <p className="achievement-event theme-color">
            IUT 10th ICT Fest, 2019
          </p>
        </div>
        <div className="single-achievement">
          <h2 className="achievement-position primary-color">Participated</h2>
          <p className="achievement-event theme-color">
            Inter University Programming Contest (SUST), 2019
          </p>
        </div>
        <div className="single-achievement">
          <h2 className="achievement-position primary-color">2nd Runners-up</h2>
          <p className="achievement-event theme-color">
            Intra LU Junior Programming Contest, 2016
          </p>
        </div>

        <div className="single-achievement">
          <h2 className="achievement-position theme-color">Participated</h2>
          <p className="achievement-event primary-color">
            SUST Tech Fest Hackathon by CEFALO , 2019
          </p>
        </div>
      </div>
    </div>
  );
}

export default Experiences;
