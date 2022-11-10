import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/opacity.css';

import img1 from "../img/logo.jpg";
import img2 from "../img/PCTashkent8.jpg";
import img3 from "../img/PCTashkent9.jpg";

function Load() {
  const style = {
    width: "200px",
  };

  return (
    <div>
    <h1>Lazy load image tutorial</h1>
      <LazyLoadImage src={img1} effect='opacity' delayTime={1000} style={style} />
    </div>
  );
}

export default Load;
