import React, { useState } from "react";
import { TextField } from "@mui/material";

export default function Color() {
  const [color, setColor] = useState('');
  const handleChange = (e) => {
    setColor(e.target.value);
  };

  return <div style={{background:color,height:'100vh', width:'100vh',display:'flex',alignItems:'center',justifyContent:'center'}}>
    <TextField onChange={handleChange} name='color' placeholder="color" type="text" value={color}></TextField>
  </div>;
}
