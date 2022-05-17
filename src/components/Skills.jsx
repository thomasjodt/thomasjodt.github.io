import '../styles/Skills.css'

export default function Skills({ name, icon }) {
  return (
    <div className='skill__tile' >
      <img
        src={require(`../assets/icons/${icon}`)}
        alt={`Icon of ${name}`} />
    </div>
  )
}
