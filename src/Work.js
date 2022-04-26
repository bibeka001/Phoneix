import React, { useState } from "react";

const Work = () => {
  const [name, setName] = useState();
  const [things, setThings] = useState();

  const inputEvent = (event) => {
    setName(event.target.value);
    console.log("clicked")
  };
  const outputEvent = () => {
    setThings(name);
    console.log("dbclicked")
  };
  return (
    <>
      <h1>Hello {things}</h1>
      <input type="text" onChange={inputEvent} />
      <button onClick={outputEvent}>Click Me</button>
    </>
  );
};

export default Work;
