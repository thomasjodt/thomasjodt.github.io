import { Link } from 'react-router-dom'

import { ReactComponent as DownloadIcon } from '../assets/icons/download.svg'
import { MainContainer } from '../components/MainContainer'
import '../styles/Home.scss'

export const Home = () => {
  return (
    <MainContainer home='home__container'>
      <div className='home__image'>
        <img src='/images/Profile_bgless.png' alt='Profile picture' />
      </div>
      <article className='home__info'>
        <p className='home__caption'>Hi, I am</p>
        <h1 className='home__title'>Orlando Díaz Torrealva</h1>
        <p className='home__description'>a Web Developer</p>
      </article>
      <section className='buttons__container'>
        <Link
          className='primary__button button'
          to='/about'
        >
          Let's talk
        </Link>
        <a
          href='https://drive.google.com/u/0/uc?id=1n9uUaOPHdaJB5HsbSWBqIHUikVx5kEuE&export=download'
          className='second__button button'
        >
          <DownloadIcon /> <span>CV</span>
        </a>
      </section>
    </MainContainer>
  )
}
