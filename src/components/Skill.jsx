import '../styles/Skill.css'

export default function Skill({ icon, iconName }) {
  return (
    <div
      className='skill-container' >
        <img
          src={require(`@icons/${icon}`)}
          title={`${iconName} Icon`}
          alt={`${iconName}`} />
    </div>
  )
}
