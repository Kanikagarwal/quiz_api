import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import "../App.css"
function Welcome() {
  return (
    <>
      <div className="container flex-col">
        <p className="wlcm-txt">Welcome to the Quiz App</p>
        <NavLink className="btn-2 text-center" to={"/category"}>Start</NavLink>
    </div>
    </>
  )
}

export default Welcome
