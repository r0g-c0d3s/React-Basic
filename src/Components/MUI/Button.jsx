import * as React from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

export default function ButtonUsage() {

  return(
    <div>
       <Link className='link' to = '/'>Home</Link>
       <br />
       <Button variant="contained" href='https://www.google.com/imgres?q=batman&imgurl=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FS%2Fpv-target-images%2F81ef275effa427553a847bc220bebe1dc314b2e79d00333f94a6bcadd7cce851.jpg&imgrefurl=https%3A%2F%2Fwww.primevideo.com%2Fdetail%2FThe-Batman%2F0TNWJYOSXYR74OY4W78E71780P&docid=3G1Ni6PILq4dgM&tbnid=VSek_14n74FBfM&vet=12ahUKEwioooWrmoaLAxVhxTgGHZNaO1gQM3oECFoQAA..i&w=3840&h=2160&hcb=2&ved=2ahUKEwioooWrmoaLAxVhxTgGHZNaO1gQM3oECFoQAA'>Hello world</Button>
    </div>
  )
 
}
