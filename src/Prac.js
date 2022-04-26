import React, { useState } from "react";

let name= "bibeka"
const Prac = () => {
    const [name, setName] = useState();
    const[chg, setChg] = useState(setName);
    const onInput = () => {
    //   setClick(event.target.value);
    //   console.log("name");
      setName('name')
      setChg(chg)

    };
  return (
    <>
      <h1>hello {name} </h1>
      <button onClick={onInput} >Click Me</button>

    </>
  );
};

export default Prac;
