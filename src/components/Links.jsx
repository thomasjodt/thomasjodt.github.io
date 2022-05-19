import '../styles/Links.css'

export default function Links({ name, url, path, viewBox }) {
  return (
    <li className='footer__list' >
      <a
        target='_blank'
        href={ url }
        className='footer__link' >
        <svg
          className='link__icon'
          fill="currentColor"
          viewBox={viewBox} >
            <path d={path} />
        </svg>
        <span className='footer__name' >{ name }</span>
      </a>
    </li>
  )
}
