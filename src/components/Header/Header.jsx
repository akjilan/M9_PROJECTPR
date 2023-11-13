import React from 'react'
import { Link } from 'react-router-dom'
import ActiveLink from '../ActiveLink/ActiveLink'

const Header = () => {
  return (
    <div>
        <Link className='pr-6' to="/">Home</Link> 
        <Link className='pr-6' to="/about">About</Link>
        <ActiveLink className='pr-6' to="/friends"></ActiveLink>
        <Link className='pr-6' to="/posts">Posts</Link>
        <Link to="/contact">Contact</Link>
    </div>
  )
}

export default Header