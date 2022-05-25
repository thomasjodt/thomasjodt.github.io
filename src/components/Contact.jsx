import '../styles/Contact.css'
import '../assets/info'

import { FaFacebookMessenger, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    <>
      <div className='main__container' >
        <h2 className='contact__title' >Contact me</h2>
        <form
          action='https://formsubmit.co/jodt5200@gmail.com'
          method='POST'
          className='contact__form' >
          <label
            className='contact__name contact__label'>
            Name
            <input
              type='text'
              name='name'
              className='contact__input'
              placeholder='Name'
              required />
          </label>
          <label className='contact__email contact__label' >
            Email
            <input
              type='email'
              name='email'
              className='contact__input'
              placeholder='Email'
              required />
          </label>
          <label className='contact__message contact__label' >
            Message
            <textarea
              name='message'
              className='contact__input contact__message'
              placeholder='Type your message...'
              required >
            </textarea>
          </label>
          <button
            className='contact__button'
            type='submit' >
              send
          </button>
        </form>
        <section className='links__container' >
          <ul className='links__list' >

            <a
              target='_blank'
              className='link messenger__icon'
              href='https://m.me/orlando.diaztorrealva' >
            <FaFacebookMessenger className='link__icon' />
            <span className='link__caption'>Messenger</span>
            </a>

            <a
              target='_blank'
              className='link github__icon'
              href='https://github.com/thomasjodt' >
            <FaGithub className='link__icon' />
            <span className='link__caption'>Github</span>
            </a>

            <a
              target='_blank'
              className='link linkedin__icon'
              href='https://www.linkedin.com/in/javier-orlando-diaz-torrealva-83b00b16a/' >
            <FaLinkedin className='link__icon' />
            <span className='link__caption'>LinkedIn</span>
            </a>
          </ul>
        </section>
      </div>
    </>
  )
}
