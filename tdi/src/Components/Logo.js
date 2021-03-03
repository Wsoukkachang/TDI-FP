import React, { Component } from "react";
import Oval from "../Images/TDI_Oval_Logo.png";
import "animate.css"; // you need to require the css fpr animation
import "./Logo.css";

export default class Logo extends Component {
  render() {
    return (
      <div className="animate__animated animate__zoomInUp animate__slower logoContainer">
        <img className="logoImg" alt="logoImg" src={Oval}></img>
      </div>
    );
  }
}
