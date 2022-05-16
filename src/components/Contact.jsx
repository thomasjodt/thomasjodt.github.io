import '@styles/Contact.css'
import { socialMedia } from '../assets/info'
import ContactLink from './ContactLink'

export default function Contact() {
  return (
    <section id='Contact' >
      <h2 className='contact-title' >Contact me</h2>

      <form
        className='contact-form'
        action="https://formsubmit.co/jodt5200@gmail.com"
        method="POST" >

          <label htmlFor="name">
            Name:
            <input
              className='textfield'
              type="text"
              name="name"
              id="name"
              placeholder='Name' />
          </label>

          <label htmlFor="email">
            Email:
            <input
              className='textfield'
            type="email"
            name="email"
            id="email"
            placeholder='Email' />
          </label>

          <label htmlFor="message">
            Message:
            <textarea
              className='textfield'
              name="message"
              id="message"
              cols="30"
              placeholder='Type your message...'
              rows="10" />
          </label>
          <button className='contact-button' >Send</button>

      </form>
      <footer className='footer' >
        <ul className='contact-list' >
          
          {socialMedia.map(item => (
            <ContactLink
              url={item.url}
              name={item.name} />
              
          ))}

        </ul>
        <a className='footer-logo' href="#Home">
          <img
            src={require('../assets/images/icon.png')}
            alt="ThomasJODT Logo" />
        </a>
      </footer>
    </section>
  )
}
