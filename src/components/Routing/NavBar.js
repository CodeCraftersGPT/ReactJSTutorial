import React from 'react'
import {Link} from 'react-router-dom'

export default function NavBar() {
  return (
    <nav>
        <Link to="/" style={{padding:"1em"}}>Home</Link>
        <Link to="/about">About</Link>
    </nav>
  )
}

