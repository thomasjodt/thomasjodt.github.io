import '../styles/Links.css'

export default function Links({ name, url }) {
  return (
    <li className='footer__list' >
      <a
        target='_blank'
        href={ url }
        className='footer__link' >
        { name }
      </a>
    </li>
  )
}
