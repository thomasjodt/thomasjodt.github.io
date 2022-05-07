import '@styles/Project.css'

export default function Project({ image, name, url }) {
  return (
    <a
      target='_blank'
      href={url}
      className='project-container' >
        <img
          className='project-image'
          src={require(`@images/${image}`)}
          alt={`Photo of  `} />
        <span className='project-name' >{name}</span>
    </a>
  )
}
