import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";

export default function Effect() {
  const [count, setCount] = useState(0);
  const [square, setSquare] = useState(0);
  const Increment = () => {
    setCount(count + 1);
  };
  useEffect(() => {
    setSquare(count * count);
  }, [count]);

  localStorage.setItem("Counter", count);
  localStorage.setItem("Square", square);
 

  return (
    <div>
      <h1>Effect</h1>
      <h2>Counter : {count}</h2>
      <h2>Square : {square}</h2>
      <Button
        onClick={Increment}
        variant="contained"
      >
        +
      </Button>
      <br />
      <Button onClick={()=>{ localStorage.clear(count,square)}} variant="contained">
        Remove
      </Button>
    </div>
  );
}
