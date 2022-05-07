import '../styles/Skill.css'

export default function Skill({ icon, iconName }) {
  return (
    <div
      className='skill-container' >
        <img
          src={require(`@icons/${icon}`)}
          title={`Logo de ${iconName}`}
          alt={`Logo de ${iconName}`} />
    </div>
  )
}
