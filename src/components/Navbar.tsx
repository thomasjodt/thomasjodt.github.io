import '../styles/Navbar.scss'
import { Link, useLocation } from 'react-router-dom'
import { ReactComponent as Home } from '../assets/icons/home.svg'
import { ReactComponent as About } from '../assets/icons/about.svg'
import { ReactComponent as Portfolio } from '../assets/icons/portfolio.svg'
import { ReactComponent as Contact } from '../assets/icons/contact.svg'
import { ReactComponent as Settings } from '../assets/icons/settings.svg'
import { Themes } from './Themes'
import { useState } from 'react'

export const Navbar = () => {
  const location = useLocation()
  const [themeBar, setThemeBar] = useState(false)
  const toggleThemeBar = () => setThemeBar(!themeBar)

  return (
    <nav className='navbar'>

      <Link
        className={`navbar__icon ${location.pathname === '/' ? 'active' : ''}`}
        to='/'
      >
        <Home />
        <span>Home</span>
      </Link>

      <Link
        className={`navbar__icon ${location.pathname === '/about' ? 'active' : ''}`}
        to='about'
      >
        <About />
        <span>About</span>
      </Link>

      <Link
        className={`navbar__icon ${location.pathname === '/portfolio' ? 'active' : ''}`}
        to='portfolio'
      >
        <Portfolio />
        <span>Portfolio</span>
      </Link>

      <Link
        className={`navbar__icon ${location.pathname === '/contact' ? 'active' : ''}`}
        to='contact'
      >
        <Contact />
        <span>Contact</span>
      </Link>
      <div onClick={toggleThemeBar} className='navbar__icon settings__icon'>
        <Settings />
        <span>Theme</span>
        {themeBar && <Themes />}
      </div>
    </nav>
  )
}
