import React, { Children } from 'react'
import { NavLink } from 'react-router-dom'

const ActiveLink = ({to}) => {
  return (
    <NavLink
    to={to}
    className={({ isActive}) => isActive? "active": "" }
  >
    Friends 
  </NavLink>
  )
}

export default ActiveLink