import React, { useState } from "react";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";

export default function State() {
  const [count, setCount] = useState(0);
  const Increment = () => {
    setCount(count + 1);
  };
  const [name, setName] = useState("Batman");

  const [color, setColor] = useState("Blue");

  const [phone, setPhone] = useState("");
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
      <Button onMouseEnter={() => setName("Batman")} variant="contained">
        Batman
      </Button>
      <br />
      <Button onMouseEnter={() => setName("Superman")} variant="contained">
        Superman
      </Button>
      <br />
      <Button onMouseEnter={() => setName("Flash")} variant="contained">
        Flash
      </Button>
      <br />
      <Button onMouseEnter={() => setName(" Iron-Man")} variant="contained">
        Iron-Man
      </Button>
      <br />
      <Button onMouseEnter={() => setName("Moon Knight")} variant="contained">
        Moon Knight
      </Button>
      <h1 style={{ color }}>{color}</h1>
      <Button onMouseEnter={() => setColor("Red")} variant="contained">
        Red
      </Button>
      <br />
      <Button onMouseEnter={() => setColor("Pink")} variant="contained">
        Pink
      </Button>
      <br />
      <Button onMouseEnter={() => setColor("Green")} variant="contained">
        Green
      </Button>
      <br />
      <h1>My phone number is {phone}</h1>
      <TextField
        onChange={(e) => setPhone(e.target.value)}
        type="number"
      />
      <br />
    </div>
  );
}
