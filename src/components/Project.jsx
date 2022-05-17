import '../styles/Project.css'

export default function Project({ url, name, image }) {
  return (
    <a
      target='_blank'
      href={url}
      className='project__container' >
      <p className='project__title' >
        <span>{name}</span>
      </p>
      <img
        className='project__image'
        src={require(`../assets/images/${image}`)}
        alt={`Picture of ${name}`} />
    </a>
  )
}
