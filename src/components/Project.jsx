import '../styles/Project.scss'

export const Project = ({ url, name, image }) => {
  return (
    <a
      target='_blank'
      href={url}
      className='project__container' rel='noreferrer'
    >
      <p className='project__title'>
        <span>{name}</span>
      </p>
      <img
        className='project__image'
        src={`/images/${image}`}
        alt={`Picture of ${name}`}
      />
    </a>
  )
}
