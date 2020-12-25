import React from "react";
import "./css/style.css";

function Skills() {
  return (
    <div className="skills">
      <h1 className="section-title primary-color">
        <span className="theme-color">02.</span> Skills
      </h1>

      <div className="skill-type">
        <h2 className="sub-title primary-color">Professional Skills</h2>
        <div className="row">
          <div className="col-md-6">
            <div className="skill-set">
              <label>HTML</label>
              <div className="meter">
                <div className="progress width-90"></div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="skill-set">
              <label>CSS</label>
              <div className="meter">
                <div className="progress width-90"></div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="skill-set">
              <label>Bootstrap</label>
              <div className="meter">
                <div className="progress width-90"></div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="skill-set">
              <label>C Programming</label>
              <div className="meter">
                <div className="progress width-70"></div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="skill-set">
              <label>SASS</label>
              <div className="meter">
                <div className="progress width-70"></div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="skill-set">
              <label>JavaScript</label>
              <div className="meter">
                <div className="progress width-50"></div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="skill-set">
              <label>GIT</label>
              <div className="meter">
                <div className="progress width-50"></div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="skill-set">
              <label>React Js</label>
              <div className="meter">
                <div className="progress width-30"></div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="skill-set">
              <label>jQuery</label>
              <div className="meter">
                <div className="progress width-50"></div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="skill-set">
              <label>Material Ui</label>
              <div className="meter">
                <div className="progress width-80"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="skill-type">
        <h2 className="sub-title primary-color">
          Personal Skills
        </h2>

        <div className="row">
          <div className="col-md-6">
            <div className="skill-set">
              <label>Communication</label>
              <div className="meter">
                <div className="progress width-90"></div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="skill-set">
              <label>Project Management</label>
              <div className="meter">
                <div className="progress width-80"></div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="skill-set">
              <label>Teamwork</label>
              <div className="meter">
                <div className="progress width-90"></div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="skill-set">
              <label>Public Speaking</label>
              <div className="meter">
                <div className="progress width-90"></div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="skill-set">
              <label>Leadership</label>
              <div className="meter">
                <div className="progress width-80"></div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="skill-set">
              <label>Creativity</label>
              <div className="meter">
                <div className="progress width-70"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
