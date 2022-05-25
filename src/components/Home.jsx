import { Link } from 'react-router-dom'
import '../styles/Home.css'
import MainContainer from './MainContainer'
import image from '../assets/images/me.jpg'

export default function Home() {
  return (
    <MainContainer home={'home__container'} >
      <img
        className='home__image'
        src={image}
        alt='Picture of me' />
      <article className='home__info' >
        <p className='home__caption' >Hi, I am</p>
        <h1 className='home__title' >Orlando Díaz Torrealva</h1>
        <p className='home__description' >a Web Developer</p>
      </article>
      <section className='buttons__container' >
        <Link
          className='primary__button button'
          to='/about-me' >
            Let's talk
        </Link>
        <a
          href='https://drive.google.com/u/0/uc?id=1w917pr1Pioh2pJqpQjmkSAY1Tf9DLZut&export=download'
          className='second__button button'>
            Download CV
        </a>
      </section>
    </MainContainer>
  )
}
