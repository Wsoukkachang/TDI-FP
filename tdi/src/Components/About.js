import React, { Component } from "react";
import Typist from "react-typist";
import { Divider } from "@material-ui/core";
import "./About.scss";

export default class About extends Component {
  render() {
    return (
      <div className="aboutContainer">
        <h1 className="aboutDiv">About Us</h1>
        <Divider variant="fullWidth" />
        <span className="aboutParagraph">
          Texas Drone Imaging is a family owned aerial services company that
          serves the Dallas-Fort Worth Metropolitan Area.
          <br />
          <br />
          Our mission is to provide our clients with a new innovative
          perspective to engage their audience, through the use of the latest
          drone technology.
          <br />
          <br />
          Client satisfaction is our number one goal. Where we look to go above
          and beyond by specifically tailoring our services to meet individual
          client needs, while maintaining exceptional quality and service
          standards.
          <br />
          <br />
        </span>
        <Typist>
          <Typist.Delay ms={5500} />
          <span className="aboutParagraphType">
            Here at Texas Drone Imaging, we take pride in our work and aim to
            show this through the services we provide.
          </span>
        </Typist>
      </div>
    );
  }
}
