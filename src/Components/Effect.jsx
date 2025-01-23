import React, { useEffect,useState } from 'react'
import { Button } from '@mui/material';

export default function Effect() {
    const [count, setCount] = useState(0);
    const [square, setSquare] = useState(0);
      const Increment = () => {
        setCount(count + 1);
      };
      useEffect (()=>
    {
        setSquare(count * count)
    },[count])
  return (
    <div>
        <h1>Effect</h1>
      <h2>Counter : {count}</h2>
      <h2>Square : {square}</h2>
      <Button
        onMouseEnter={Increment}
        onMouseLeave={Increment}
        variant="contained"
      >
        +
      </Button>
    </div>
  )
}
