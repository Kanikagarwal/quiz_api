import React from 'react'
import { Outlet } from 'react-router-dom'
import Background from './Background'

function Layout() {
  return (
    <>
    <Background/>
      <Outlet/>
    </>
  )
}

export default Layout
