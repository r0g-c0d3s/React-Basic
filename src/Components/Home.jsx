import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button';
import "./style.css";
export default function Home() {

  let nav = useNavigate()
  function click() {
    nav('/arrow')
  }
  return (
    <div>
        <h1 style={{color:"#fff"}}>This is Home</h1>
        <br />
        <Link className='link' to = '/arrow'>Arrow</Link>
        <br />
        <Link className='link' to = '/button'>button</Link>
        <br />
        <Link className='link' to = '/array'>array</Link>
        <br />
        <Link className='link' to = '/spread'>spread</Link>
        <br />
        <Link className='link' to = '/ternary'>ternary</Link>
        <br />
        <Link className='link' to = '/dest'>dest</Link>
        <br />
        <Link className='link' to = '/props'>props</Link>
        <br />
        <Link className='link' to = '/state'>State</Link>
        <br />
        <Link className='link' to='/effect'>Effect</Link>
        <br />
        <Link className='link' to='/color'>Color</Link>
        <br />
        <Link className='link' to='/table'>Table</Link>
        <br />
        <Link className='link' to='/mui'>MUI</Link>
        <br />
        <Link className='link' to='/api'>API</Link>
        <br />
        <Link className='link' to='/dog'>DOG</Link>
        <br />
      
        <Button onClick={click} variant='contained'>Arrow</Button>
    </div>
  )
}
