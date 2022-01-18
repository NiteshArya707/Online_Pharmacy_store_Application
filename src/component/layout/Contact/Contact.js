import React from "react";
import "./Contact.css";
import { Button } from "@material-ui/core";

const Contact = () => {
  return (
    <div className="contactContainer">
      <a className="mailBtn" href="mailto:nitesharya309@gmail.com@gmail.com">
        <Button>Contact: nitesharya309@gmail.com</Button>
      </a>
    </div>
  );
};

export default Contact;
