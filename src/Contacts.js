import React from "react";
import Button from "@material-ui/core/Button";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import EmailIcon from "@material-ui/icons/Email";
import CallIcon from "@material-ui/icons/Call";

function Contacts() {
  return (
    <div className="contacts">
      <h1 className="section-title primary-color">
        <span className="theme-color">05.</span> Contact me
      </h1>

      <div className="contact-me text-center">
        <h2 className="contact-heading primary-color">Get In Touch</h2>
        <p className="contact-description secondary-color">
          Although I'm not currently looking for any new opportunities, my inbox
          is always open. Whether you have a question or just want to say hi,
          I'll try my best to get back to you!
        </p>
        <Button
          href="mailto:js.mustafiz@gmail.com"
          variant="outlined"
          color="primary"
          className="contactButton"
        >
          Say Hello
        </Button>
      </div>

      <div className="social-links text-center">
        <h2 className="social-title primary-color"> Get Connected Via</h2>
        <div className="row">
          <div className="social-icon col-md-4">
            <a href="mailto:js.mustafiz@gmail.com" target="blank">
              <EmailIcon /> js.mustafiz@gmail.com{" "}
            </a>
          </div>
          <div className="social-icon col-md-4">
            <a href="#">
              <CallIcon /> +8801521321451{" "}
            </a>
          </div>
          <div className="social-icon col-md-4">
            <a href="https://github.com/mustafiz-codes" target="blank">
              <GitHubIcon /> mustfaiz-codes{" "}
            </a>
          </div>
          <div className="social-icon col-md-4">
            <a
              href="https://www.linkedin.com/in/mustafizur-rahman-choudhury-865089153/"
              target="blank"
            >
              <LinkedInIcon /> mustafizur-rahman-choudhury-865089153{" "}
            </a>
          </div>
          <div className="social-icon col-md-4">
            <a href="https://twitter.com/Mustafi39907507" target="blank">
              <TwitterIcon /> Mustafi39907507{" "}
            </a>
          </div>
          <div className="social-icon col-md-4">
            <a href="https://www.instagram.com/shakil_chy/" target="blank">
              <InstagramIcon /> shakil_chy{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
