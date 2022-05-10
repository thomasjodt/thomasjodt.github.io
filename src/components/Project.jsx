import '@styles/Project.css'

export default function Project({ image, name, url }) {
  return (
    <a
      target='_blank'
      href={url}
      className='project-container' >
        <div className='project-name' >
          <p>{name}</p>
        </div>
        <img
          className='project-image'
          src={require(`@images/${image}`)}
          alt={`Photo of  `} />
    </a>
  )
}
