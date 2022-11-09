import React, { useEffect } from "react";
import { useState } from "react";

function Couneter() {
  // const [number, setNumber] = useState(0);

  const [info, setInfo] = useState("git ");

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/' + info)
      .then((response) => response.json())
      .then((json) => console.log(json));
  });

  // useEffect(() => {
  //   document.title = number
  // }, []);

  return (
    <div>
      <button onClick={()=>{setInfo("posts")}}>posts</button>
      <button onClick={()=>{setInfo("users")}}>users</button>
      <button onClick={()=>{setInfo("todos")}}>todos</button>


      {/* <button onClick={() => setNumber(number - 1)}>-</button>
      <p>number is {number}</p>
      <button onClick={() => setNumber(number + 1)}>+</button> */}
    </div>
  );
}

export default Couneter;
