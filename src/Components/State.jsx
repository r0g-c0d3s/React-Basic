import React, { useState } from "react";
import Button from "@mui/material/Button";

export default function State() {
  const [count, setCount] = useState(0);
  const Increment = () => {
    setCount(count + 1);
  };
  const [name, setName] = useState("Batman");

  return (
    <div>
      <h1>State</h1>
      <h2>Counter : {count}</h2>
      <Button
        onMouseEnter={Increment}
        onMouseLeave={Increment}
        variant="contained"
      >
        +
      </Button>{" "}
      <br />
      <Button
        onMouseEnter={() => setCount(count - 1)}
        onMouseLeave={() => setCount(count - 1)}
        variant="contained"
      >
        -
      </Button>
      <h1>My name is : {name}</h1>
      <Button onClick={() => setName("Superman")} variant="contained">
        Change
      </Button>
    </div>
  );
}
