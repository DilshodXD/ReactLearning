import React from "react";
import { Context } from "../contextTur/Context";

function About() {
  const place = React.useContext(Context);

  return (
    <div>
      <h1>City: {place.city}</h1>
    </div>
  );
}

export default About;
