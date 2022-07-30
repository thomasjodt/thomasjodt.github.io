import '../styles/Navbar.scss'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav className='navbar'>

      <Link
        className='material-symbols-rounded'
        to='/'
      >
        home
      </Link>

      <Link
        className='material-symbols-rounded'
        to='about'
      >
        person
      </Link>

      <Link
        className='material-symbols-rounded'
        to='portfolio'
      >
        work
      </Link>

      <Link
        className='material-symbols-rounded'
        to='contact'
      >
        mail
      </Link>
    </nav>
  )
}
