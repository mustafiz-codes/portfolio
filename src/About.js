import React from "react";
import "./css/style.css";
import profileImg from "./images/profile.JPG"

function About() {
  return (
    <div className="about">
      <h1 className="section-title">01. About Me</h1>

      <div className="row">
            <div className="col-md-7">
                <p className="about-me">
                    Hello! I'm Brittany, a software engineer based in Boston, MA.
                </p>
                <p className="about-me">
                    I enjoy creating things that live on the internet, whether that be
                    websites, applications, or anything in between. My goal is to always
                    build products that provide pixel-perfect, performant experiences.
                </p>
                <p className="about-me">
                    Shortly after graduating from Northeastern University, I joined the
                    engineering team at Upstatement where I work on a wide variety of
                    interesting and meaningful projects on a daily basis.
                </p>
            </div>

            <div className="col-md-5">
                <div className="bb">
                <img src={profileImg}/>
                </div>
            </div>
      </div>
      
    </div>
  );
}

export default About;
