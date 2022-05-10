import { useState } from 'react'
import logo from '../assets/images/logo.png'

import '@styles/Home.css'

export default function Home() {
  const [active, setActive] = useState('')
  const handlerBurger = () => {
    if (active === '') {
      setActive('active')
    } else {
      setActive('')
    }
  }

  return (
    <header id='Home' >
      <nav className="main-navbar">
        <ul className={`nav-list ${active}`} >
          <li onClick={handlerBurger} ><a
            className='nav-item'
            href="#About" >
              About
          </a></li>
          <li onClick={handlerBurger} ><a
            className='nav-item'
            href="#Portfolio" >
              Portfolio
          </a></li>
          <li onClick={handlerBurger} ><a
            className='nav-item'
            href="#Contact" >
              Contact
          </a></li>
        </ul>
        <ul className="navlist-desktop">
          <li className='navItem-desktop' ><a href="#About">About</a></li>
          <li className='navItem-desktop' ><a href="#Portfolio">Portfolio</a></li>
          <li className='navItem-desktop' ><a href="#Contact">Contact</a></li>
        </ul>
        <div
          className={`burger-button ${active}`}
          onClick={handlerBurger} >
            <span></span>
            <span></span>
            <span></span>
        </div>
      </nav>

      <img
        className='header-logo'
        src={logo} alt="ThomasJODT Logo" />

      <div className='header-base' >
        <p>Learn more about me</p>
      </div>
    </header>
  )
}
