import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Navbar'
import Footer from './Footer'
function Layout() {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout