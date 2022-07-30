import '../styles/Project.scss'

export const Project = ({ url, name, image, tags, description }) => {
  return (
    <a
      target='_blank'
      href={url}
      className='project__container' rel='noreferrer'
    >
      <img
        className='project__image'
        src={`/images/${image}`}
        alt={`Picture of ${name}`}
      />
      <div className='project__content'>
        <h3 className='project__title'>{name}</h3>
        <p className='project__tags'>{tags.join(', ')}</p>
        <p>{description}</p>
      </div>

    </a>
  )
}
