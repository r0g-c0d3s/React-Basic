import React from "react";
import { Button } from "@mui/material";

export default function Arrow() {
  function a() {
    alert("I am Batman!");
  }

  const b = (c) => {
    alert("I am Batman!" + c);
  };
  return (
    <div>
      <h1>
        I am{" "}
        <b
          style={{
            backgroundColor: "#000",
            borderRadius: "10px",
            padding: "5px",
          }}
        >
          Batman
        </b>
      </h1>
      <Button onClick={a}>qwerty</Button>
      <Button onClick={() => b(" djh")}>uiop</Button>
    </div>
  );
}
