import './styles/main.css'
import './styles/outfit.css'
import './styles/App.css'
import { Link } from 'react-router-dom'
import { IoClose } from 'react-icons/io5'
import { IoMdMenu } from 'react-icons/io'
import { useState } from 'react'


export default function App({ children }) {
  const [menu, setMenu] = useState('')

  const handlerMenuActive = () => {
    setMenu('side-nav--active')
  }
  const handlerMenuInactive = () => {
    setMenu('')
  }

  return (
    <>
    <button
    onClick={handlerMenuActive}
      className='burger-button' >
        <IoMdMenu />
    </button>
    <aside className={`side-nav ${menu}`} >
      <button
        onClick={handlerMenuInactive}
        className={`side-nav__button`} >
          <IoClose />
      </button>
      <ul>
        <li><Link className='side-nav__link' to='/'>Home</Link></li>
        <li><Link className='side-nav__link' to='about-me'>About me</Link></li>
        <li><Link className='side-nav__link' to='portfolio'>Portfolio</Link></li>
        <li><Link className='side-nav__link' to='contact-me'>Contact me</Link></li>
      </ul>
    </aside>
    { children }
    </>
  )
}