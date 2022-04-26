import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";

const IncDec = () => {
  const [ins, setIns] = useState(0);
  const inputOne = () => {
    setIns(ins + 1);
  };
  const inputTwo = () => {
    if (ins > 0) {
      setIns(ins - 1);
    } else {
      setIns(0);
      alert("Sorry! The Initial value is 0");
    }
  };
  return (
    <>
      <h1> {ins}</h1>

      <button onClick={inputOne}>
        <AddIcon />
      </button>
      <button onClick={inputTwo}>
        <DeleteIcon />
      </button>
    </>
  );
};

export default IncDec;
