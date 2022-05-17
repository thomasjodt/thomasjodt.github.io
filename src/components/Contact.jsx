import '../styles/Contact.css'
import '../assets/info'
import { socialMedia } from '../assets/info'
import Links from './Links'

export default function Contact() {
  return (
    <>
      <div className='main__container contact__container' >
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
      </div>
      <footer className='contact__footer' >
        <div className='footer__left' >
          <ul>
            {socialMedia.map(e => (
              <Links
              url={e.url}
              key={e.name}
                name={e.name} />
            ))}
          </ul>
        </div>
        <div className='footer__right' >
          <img
            className='footer__image'
            alt="ThomasJODT's Logo"
            src={require(`../assets/images/icon.png`)} />
        </div>
      </footer>
    </>
  )
}
