import React from 'react'
import { Link } from 'react-router-dom'
import './Calculator.css'

const Navbar = () => {
  return (
    <div className='navbar'>
        <Link to='/' >ABOUT</Link>
        <Link to='/calculator' >CALICULATOR</Link>
        <Link to='/animation' >ANIMATION</Link>
    </div>
  )
}

export default Navbar