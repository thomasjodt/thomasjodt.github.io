import '../styles/ContactLink.css'

export default function ContactLink({ name, url}) {
  return (
    <li className='contact-link' >
      <a
        target='_blank'
        className='contact-link'
        href={url} >
          <span>{name}</span>
      </a>
    </li>
  )
}

