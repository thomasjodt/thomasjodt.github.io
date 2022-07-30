import '../styles/Navbar.scss'
import { Link } from 'react-router-dom'
import { ReactComponent as Home } from '../assets/icons/home.svg'
import { ReactComponent as About } from '../assets/icons/about.svg'
import { ReactComponent as Portfolio } from '../assets/icons/portfolio.svg'
import { ReactComponent as Contact } from '../assets/icons/contact.svg'

export const Navbar = () => {
  return (
    <nav className='navbar'>

      <Link
        className='navbar__icon'
        to='/'
      >
        <Home />
        <span>Home</span>
      </Link>

      <Link
        className='navbar__icon'
        to='about'
      >
        <About />
        <span>About</span>
      </Link>

      <Link
        className='navbar__icon'
        to='portfolio'
      >
        <Portfolio />
        <span>Portfolio</span>
      </Link>

      <Link
        className='navbar__icon'
        to='contact'
      >
        <Contact />
        <span>Contact</span>
      </Link>
    </nav>
  )
}
