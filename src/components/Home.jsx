import { Link } from 'react-router-dom'
import '../styles/Home.css'

export default function Home() {
  return (
    <header className='header__container' >
      <img
        className='profile__image'
        src={require('../assets/images/me.jpg')}
        alt='Picture of me' />
      <article className='profile__info' >
        <p className='profile__greeting' >Hi, I am</p>
        <h1 className='profile__name' >Orlando Díaz Torrealva</h1>
        <p className='profile__greeting' >a Web Developer</p>
      </article>
      <section className='buttons__container' >
        <Link
          className='button__main header__button'
          to='/about-me' >
            Let's talk
        </Link>
        <a
          className='button__second header__button'
          href='/' >
            Download CV
        </a>
      </section>
    </header>
  )
}
