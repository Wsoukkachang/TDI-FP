import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Fab from "@material-ui/core/Fab";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import Zoom from "@material-ui/core/Zoom";
import LazyLoad from "react-lazyload";
import ReactFullpage from "@fullpage/react-fullpage";
import Vid1 from "./Images/vid1.mp4";

import { render } from "react-dom";
import {
  Link,
  DirectLink,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

import ButtonAppBar from "./Components/AppBar";
import Logo from "./Components/Logo";
import About from "./Components/About";
import Gallery from "./Components/Gallery";
import Carousel from "./Components/Carousel";
import SiteMap from "./Components/Map";
import Footer from "./Components/Footer";

import "./App.css";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

// scroll to top button
function ScrollTop(props) {
  const { children, window } = props;
  const classes = useStyles();
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}

function App(props) {
  let mapCenter = { lat: 32.738773, lng: -97.003098 };
  let mapZoom = 12;

  return (
    <div className="app">
      <ButtonAppBar className="navBar" />

      <ReactFullpage
        //fullpage options
        autoScrolling={true}
        navigation={true}
        anchors={["section1", "section2", "section3", "section4"]}
        navigationTooltips={["About Us", "Gallery", "Wind Map", "Contact"]}
        showActiveTooltip={true}
        scrollingSpeed={1000}
        controlArrows={true}
        animateAnchor={false}
        paddingTop={"25px"}
        verticalCentered={false}
        slidesNavigation={true}
        menu={".navBar"}
        // fixedElements={ButtonAppBar - fixed - top}
        licenseKey={"YOUR_KEY_HERE"}
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <div className="section" id="section0">
                <video id="myVideo" loop muted data-autoplay>
                  <source src={Vid1} type="video/mp4" />
                </video>
                <div class="layer">
                  <h1>Texas Drone Imaging</h1>
                </div>
              </div>
              <div className="section">
                <Toolbar id="back-to-top-anchor" />
                <Logo />

                <LazyLoad height={200} offset={100}>
                  <Element name="test1" className="element">
                    <About />
                  </Element>
                </LazyLoad>
              </div>

              <div className="section">
                <Gallery />
              </div>

              <div className="section">
                <LazyLoad height={200} offset={100}>
                  <SiteMap center={mapCenter} zoom={mapZoom} />
                </LazyLoad>
              </div>

              <div className="section">
                <LazyLoad height={200} offset={100}>
                  <Element name="test=3" className="element">
                    <Footer />
                  </Element>
                </LazyLoad>

                <LazyLoad height={200} offset={100}>
                  <ScrollTop {...props}>
                    <Fab
                      color="secondary"
                      size="small"
                      aria-label="scroll back to top"
                    >
                      <KeyboardArrowUpIcon />
                    </Fab>
                  </ScrollTop>
                </LazyLoad>
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </div>
  );
}

export default App;
