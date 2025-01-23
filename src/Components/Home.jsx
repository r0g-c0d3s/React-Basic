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
        <Link className='link' to = '/arrow'>Arrow</Link>
        <Link className='link' to = '/button'>button</Link>
        <Link className='link' to = '/array'>array</Link>
        <Link className='link' to = '/spread'>spread</Link>
        <Link className='link' to = '/ternary'>ternary</Link>
        <Link className='link' to = '/dest'>dest</Link>
        <Link className='link' to = '/props'>props</Link>
        <Link className='link' to = '/state'>State</Link>
        <Link className='link' to='/effect'>Effect</Link>
        <Link className='link' to='/color'>Color</Link>
        <Button onClick={click} variant='contained'>Arrow</Button>
    </div>
  )
}
