import React, { Component } from "react";
// import "./Footer.css";
import InstagramIcon from "@material-ui/icons/Instagram";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";

export default class Footer extends Component {
  render() {
    return (
      <div className="footerContainer">
        <i class="mdi mdi-chevron-double-up page-link" dest="home"></i>

        <div class="icon-row">
          <a href="tel:4699102078">
            <div class="icon" id="icon-1">
              <PhoneIcon color="primary" />
            </div>
          </a>

          <a
            href="https://www.instagram.com/texasdroneimaging/"
            target="_blank"
          >
            <div class="icon" id="icon-4">
              <InstagramIcon color="primary" />
            </div>
          </a>

          <a href="mailto: saul@texasdroneimaging.net">
            <div class="flex icon" id="icon-3">
              <EmailIcon color="primary" />
            </div>
          </a>
        </div>

        <div class="info-box">
          <div class="footnote">
            Texas Drone Imaging <span class="highlight">&copy; 2020</span>
          </div>
        </div>
      </div>
    );
  }
}
