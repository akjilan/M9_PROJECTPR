import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'

const Homepage = () => {
  return (
    <>
    <Header></Header>
    <Outlet></Outlet>
    </>
  )
}

export default Homepage