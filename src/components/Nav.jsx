import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <>
    <nav className="navbar">
      <div className="logo">Countries</div>

      <ul className="nav-links">
        <li><Link to="/">Uzbekistan</Link></li>
        <li><Link to="/usa">USA</Link></li>
        <li><Link to="/japan">Japan</Link></li>
        <li><Link to="/france">France</Link></li>
      </ul>


    </nav>
    </>
  )
}

export default Nav
