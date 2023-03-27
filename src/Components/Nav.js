import React from 'react'
import './Nav.css'

function Nav() {
  return (
    <nav>
        <h3 className="logo">Prateek</h3>
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>
  )
}

export default Nav
