import React from "react";
import Button from "@material-ui/core/Button";
import "./css/style.css";

function Home() {
  return (
    <div className="home primary-bg">
      <p className="greetings theme-color">Hi, my name is</p>
      <h1 className="devName primary-color">Mustafizur Rahman Choudhury.</h1>
      <div className="dev_work secondary-color">
        <h2 className="dev_title">I build things for the web.</h2>
        <p className="dev_description">
          I'm a web developer based in Sylhet, Bangladesh specializing in
          building exceptional websites, applications, and everything in
          between.
        </p>
      </div>
      <Button
        href="mailto:js.mustafiz@gmail.com"
        variant="outlined"
        color="primary"
        className="contactButton"
      >
        Get in Touch
      </Button>
    </div>
  );
}

export default Home;
