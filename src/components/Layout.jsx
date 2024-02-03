import React from 'react'
import { Outlet } from 'react-router-dom'
import {Navbar , Home} from "../index"
function Layout() {
  return (
    <>
    <Navbar></Navbar>
    <Outlet></Outlet>
    </>
  )
}

export default Layout