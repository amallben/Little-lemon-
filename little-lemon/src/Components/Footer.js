import React from 'react'
import logo from '../Assets/img/footerlogo.PNG'
import { FaInstagram , FaTwitterSquare, FaFacebookSquare } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="padding_3x">
  <div className="flex">
    <section className="flex-content padding_1x">
    <img src={logo} alt=''/>
    </section>
    <section className="flex-content padding_1x">
      <h3>Doormate Navigation</h3>
      <a href="#">Home</a>
      <a href="#">About</a>
      <a href="#">Menu</a>
      <a href="#">Reservations</a>
      <a href="#">Order Online</a>
      <a href="#">Login</a>
    </section>
    <section className="flex-content padding_1x">
      <h3>Contacts</h3>
      <a href="#"> 0332145666</a>
      <a href="#">Little-lemon@gmail.com</a>
      <a href="#">1245 Street1, Chicago</a>
    </section>
  </div>
  <div className="flex">
    <section className="flex-content padding_1x">
      <p>Copyright ©2023 All rights reserved || Little lemon</p>
    </section>
    <section className="flex-content padding_1x">
      <a href="#"><FaInstagram/></a>
      <a href="#"><FaTwitterSquare/></a>
      <a href="#"><FaFacebookSquare/></a>
    </section>
  </div>
</footer>
  )
}
