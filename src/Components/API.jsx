import axios from 'axios'
import React, { useEffect } from 'react'

export default function API() {
    useEffect (()=>{
        axios.get("https://dummyjson.com/quotes")
    },[])
  return (
    <div>API</div>
  )
}
