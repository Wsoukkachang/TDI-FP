import React, { Component } from "react";
// import Typist from "react-typist";
import { Divider } from "@material-ui/core";
import "./Gallery.scss";
import GP from "../Images/GP.jpg";
import Dallas from "../Images/Dallas.jpg";
import FW from "../Images/FW.jpg";
import Con1 from "../Images/Gallery/Construction1.jpg";
import Con2 from "../Images/Gallery/Construction2.jpg";
import Real from "../Images/Gallery/Real Estate.jpg";

export default class Gallery extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="slide">
          <img className="images" data-src={GP}></img>
        </div>

        <div className="slide">
          <img className="images" data-src={Dallas}></img>
        </div>

        <div className="slide">
          <img className="images" data-src={FW}></img>
        </div>

        <div className="slide">
          <img className="images" data-src={Con1}></img>
        </div>

        <div className="slide">
          <img className="images" data-src={Con2}></img>
        </div>

        <div className="slide">
          <img className="images" data-src={Real}></img>
        </div>
      </React.Fragment>
    );
  }
}
