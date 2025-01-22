import React from 'react'
import { Link } from 'react-router-dom'
import "./style.css";
export default function Home() {
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

    </div>
  )
}
