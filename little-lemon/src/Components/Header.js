import React from 'react'
import logo from '../Assets/img/Little-lemon.PNG'

export default function Header() {
  return (
    <>
    <nav className='nav-bar'>
    <div className='navbar-header'>
      <button className="navbar-toggler" data-toggle="open-navbar1">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <img src={logo} alt=''/>
      </div>
      <div className="navbar-menu">
        <ul>
        <li ><a href="#">Home</a></li>
        <li ><a href="#">About</a></li>
        <li ><a href="#">Menu</a></li>
        <li ><a href="#">Reservations</a></li>
        <li><a href="#">Order Online</a></li>
        <li><a href="#">Login</a></li>
    </ul>
    </div>
        </nav>
    </>
  )
}
