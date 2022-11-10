import React, { useContext } from "react";
import { Context } from "../contextTur/Context";

function Display() {
  const personName = useContext(Context);
  return (
    <div>
      <h1>Name: {personName.name}</h1>
      <p>Age: {personName.age}</p>
      <p>Phone number: {personName.phone}</p>

      {/* <Context.Consumer>
        {(personName) => <h1>{personName}</h1>}
      </Context.Consumer> */}
    </div>
  );
}

export default Display;
