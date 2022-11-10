import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import image1 from "./logo.jpg";
import image2 from "./PCTashkent8.jpg";
import image3 from "./PCTashkent9.jpg";
import "./style.css";
import { useEffect } from "react";

function ScrollEffect() {
  useEffect(() => {
    Aos.init();
  });

  return (
    <div>
      <div className="image__section">
        <img className="image" src={image1} alt="" />
        <img className="image" src={image2} alt="" />
        <img className="image" src={image3} alt="" />
      </div>
    </div>
  );
}

export default ScrollEffect;
