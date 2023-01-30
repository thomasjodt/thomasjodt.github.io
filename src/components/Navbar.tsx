import { Themes } from './Themes'
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

import { ReactComponent as Home } from '../assets/icons/home.svg'
import { ReactComponent as About } from '../assets/icons/about.svg'
import { ReactComponent as Portfolio } from '../assets/icons/portfolio.svg'
import { ReactComponent as Contact } from '../assets/icons/contact.svg'
import { ReactComponent as Settings } from '../assets/icons/settings.svg'

import '../styles/Navbar.scss'

export const Navbar = (): JSX.Element => {
  const location = useLocation()
  const [themeBar, setThemeBar] = useState(false)
  const toggleThemeBar = (): void => { setThemeBar(!themeBar) }

  const verifyLocation = (currentLocation: string): string => (location.pathname === currentLocation) ? 'active' : ''

  return (
    <nav className='navbar'>

      <Link
        className={`navbar__icon ${verifyLocation('/')}`}
        to='/'
      >
        <Home />
        <span>Home</span>
      </Link>

      <Link
        className={`navbar__icon ${verifyLocation('/about')}`}
        to='about'
      >
        <About />
        <span>About</span>
      </Link>

      <Link
        className={`navbar__icon ${verifyLocation('/portfolio')}`}
        to='portfolio'
      >
        <Portfolio />
        <span>Portfolio</span>
      </Link>

      <Link
        className={`navbar__icon ${verifyLocation('/contact')}`}
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
