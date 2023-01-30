import { ReactComponent as Send } from '../assets/icons/send.svg'
import '../styles/Contact.scss'
import '../assets/info'

import { FaFacebookMessenger, FaLinkedin, FaGithub } from 'react-icons/fa'

export const Contact = () => {
  return (
    <>
      <div className='main__container'>
        <h2 className='contact__title'>Contact me</h2>
        <form
          action='https://formsubmit.co/jodt5200@gmail.com'
          method='POST'
          className='contact__form'
        >
          <label
            className='contact__name contact__label'
          >
            Name
            <input
              type='text'
              name='name'
              className='contact__input'
              placeholder='Name'
              required
            />
          </label>
          <label className='contact__email contact__label'>
            Email
            <input
              type='email'
              name='email'
              className='contact__input'
              placeholder='Email'
              required
            />
          </label>
          <label className='contact__message contact__label'>
            Message
            <textarea
              name='message'
              className='contact__input contact__message'
              placeholder='Type your message...'
              required
            />
          </label>
          <button
            className='contact__button send__button'
            type='submit'
          >
            <Send />
            <span>send</span>
          </button>
        </form>
        <section className='links__container'>
          <ul className='links__list'>

            <a
              target='_blank'
              className='link messenger__icon'
              href='https://m.me/orlando.diaztorrealva' rel='noreferrer'
            >
              <FaFacebookMessenger className='link__icon messenger' />
              <span className='link__caption messenger'>Messenger</span>
            </a>

            <a
              target='_blank'
              className='link github__icon'
              href='https://github.com/thomasjodt' rel='noreferrer'
            >
              <FaGithub className='link__icon github' />
              <span className='link__caption github'>Github</span>
            </a>

            <a
              target='_blank'
              className='link linkedin__icon'
              href='https://www.linkedin.com/in/javier-orlando-diaz-torrealva-83b00b16a/' rel='noreferrer'
            >
              <FaLinkedin className='link__icon linkedin' />
              <span className='link__caption linkedin'>LinkedIn</span>
            </a>
          </ul>
        </section>
      </div>
    </>
  )
}
