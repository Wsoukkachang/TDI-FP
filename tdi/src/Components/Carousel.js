import React from "react";
import Slide from "./Slide";
import GP from "../Images/GP.jpg";
import Dallas from "../Images/Dallas.jpg";
import FW from "../Images/FW.jpg";
import Con1 from "../Images/Gallery/Construction1.jpg";
import Con2 from "../Images/Gallery/Construction2.jpg";
import Real from "../Images/Gallery/Real Estate.jpg";
import "animate.css"; // you need to require the css for animation
// import "./Carousel.scss";
// import SimpleModalSlideshow from "react-simple-modal-slideshow";
import { Fullscreen } from "@material-ui/icons";

const slides = [
  {
    title: "Overview",
    subtitle: "Grand Prairie",
    // description: "Adventure is never far away",
    image: `${GP}`,
  },
  {
    title: "Facility",
    subtitle: "Dallas",
    // description: "Providing new perspectives",
    image: `${Dallas}`,
  },
  {
    title: "Agriculture",
    subtitle: "Fort Worth",
    // description: "A piece of heaven",
    image: `${FW}`,
  },
  {
    title: "Overview",
    subtitle: "Construction",
    // description: "Adventure is never far away",
    image: `${Con1}`,
  },
  {
    title: "Side Angle",
    subtitle: "Construction",
    // description: "Providing new perspectives",
    image: `${Con2}`,
  },
  {
    title: "Developing",
    subtitle: "Real Estate",
    // description: "A piece of heaven",
    image: `${Real}`,
  },
];

const initialState = {
  open: false,
  slideIndex: 0,
  // currentSlide: index,
};

// const openSlideshow = (index) => {
//   this.setState({
//     open: true,
//     currentSlide: index,
//   });
// };

// const handleClose = (index) => {
//   this.setState({
//     open: false,
//   });
// };

const slidesReducer = (state, event) => {
  if (event.type === "NEXT") {
    return {
      ...state,
      slideIndex: (state.slideIndex + 1) % slides.length,
    };
  }
  if (event.type === "PREV") {
    return {
      ...state,
      slideIndex:
        state.slideIndex === 0 ? slides.length - 1 : state.slideIndex - 1,
    };
  }
};

// imgFullScreen = () => {};

function Carousel() {
  const [state, dispatch] = React.useReducer(slidesReducer, initialState);

  return (
    <div className="slidesContainer">
      <div className="slides">
        <button
          className="animate__animated animate__bounceInLeft animate__delay-0.5s gallery-button"
          onClick={() => dispatch({ type: "PREV" })}
        >
          ‹
        </button>
        {[...slides, ...slides, ...slides].map((slide, i) => {
          let offset = slides.length + (state.slideIndex - i);
          return (
            <Slide
              slide={slide}
              offset={offset}
              key={i}
              // onClick={openSlideshow(slideIndex)}
            />
          );
        })}
        <button
          className="animate__animated animate__bounceInRight animate__delay-0.5s gallery-button"
          onClick={() => dispatch({ type: "NEXT" })}
        >
          ›
        </button>
      </div>
    </div>
  );
}

export default Carousel;
