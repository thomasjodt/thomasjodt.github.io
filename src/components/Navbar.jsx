import '../styles/Navbar.scss'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav className='navbar'>

      <Link
        className='home__button material-symbols-rounded'
        to='/'
      >
        home
      </Link>

      <Link
        className='about__button material-symbols-rounded'
        to='about-me'
      >
        person
      </Link>

      <Link
        className='portfolio__button material-symbols-rounded'
        to='portfolio'
      >
        work
      </Link>

      <Link
        className='mail__button material-symbols-rounded'
        to='contact-me'
      >
        mail
      </Link>
    </nav>
  )
}
