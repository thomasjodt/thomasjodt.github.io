import '../styles/Skills.scss'

export const Skills = ({ name, icon }) => {
  return (
    <div className='skill__tile'>
      <img
        src={`/icons/${icon}`}
        alt={`Icon of ${name}`}
      />
    </div>
  )
}
