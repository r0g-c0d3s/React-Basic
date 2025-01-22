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

  const [user, setUser] = useState({ name: "", email: "" });
  const handleChange = (e) => {
    setUser({[e.target.name]:e.target.value})
  }

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
      <hr />
      <br />
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
      <TextField onChange={(e) => setPhone(e.target.value)} type="number" />
      <hr />
      <br />
      <h4>Name : {user.name}</h4>
      <h4>E-mail : {user.email}</h4>
      <TextField onChange={handleChange} type="text" name="name" placeholder="enter your name" />
      <br />
      <TextField onChange={handleChange}  type="text" name="email" placeholder="enter your email" />
      <br />
    </div>
  );
}
