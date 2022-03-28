import React, { useState } from "react";
import "./Slider.css";
import { ArrowRightOutlined, ArrowLeftOutlined } from "@mui/icons-material";
import { sliderItems } from "../data";

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  const handleClick = (direction) => {
    if (direction === "left" && slideIndex !== 1) {
      setSlideIndex((s) => s - 1);
    } else if (direction === "right" && slideIndex !== sliderItems.length) {
      setSlideIndex((s) => s + 1);
    }
  };

  return (
    <div className="slider">
      <div className="arrow1">
        <ArrowLeftOutlined onClick={() => handleClick("left")} />
      </div>
      <div className="wrapper-slider">
        {sliderItems.map((item) => {
          return (
            item.id === slideIndex && (
              <div className="slide" key={item.id} bg={item.bg} >
                <div className="image-container">
                  <img className="image1" src={item.img} alt="Coat" />
                </div>
                <div className="info-container">
                  <h1 className="name-h1">{item.title}</h1>
                  <p className="description1">{item.desc}</p>
                  <button className="show-button">SHOW NOW</button>
                </div>
              </div>
            )
          );
        })}
      </div>
      <div className="arrow2">
        <ArrowRightOutlined onClick={() => handleClick("right")} />
      </div>
    </div>
  );
};

export default Slider;
