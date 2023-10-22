import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
        <Link className='pr-6' to="/">Home</Link> 
        <Link className='pr-6' to="/about">About</Link>
        <Link className='pr-6' to="/friends">Friends</Link>
        <Link to="/contact">Contact</Link>
    </div>
  )
}

export default Header