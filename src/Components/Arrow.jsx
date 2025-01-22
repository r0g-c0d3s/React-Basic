import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

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
      <Link className='link' to = '/button'>button</Link>{/*link the pages */}
        <Link className='link' to = '/array'>array</Link>
        <Link className='link' to = '/spread'>spread</Link>
        <Link className='link' to = '/ternary'>ternary</Link>
        <Link className='link' to = '/dest'>dest</Link>
        <Link className='link' to = '/props'>props</Link>
    </div>
  );
}
