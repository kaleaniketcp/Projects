import React, { useState } from "react";
import "./main.scss";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { sliderItems } from "../data";

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <div className="slider_container">
      <div className="arrow left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </div>
      <div
        className="slider_wrapper"
        style={{ transform: `translateX(-${slideIndex * 100}vw)` }}
      >
        {sliderItems.map((item) => (
          <div className="slide" key={item.id}>
            <div className="imgContainer">
              <img src={item.img} alt="" />
            </div>
            <div className="infoContainer">
              <h1>{item.title}</h1>
              <p>{item.desc}</p>
              <button>Shop Now</button>
            </div>
          </div>
        ))}
      </div>
      <div className="arrow right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </div>
    </div>
  );
};

export default Slider;
