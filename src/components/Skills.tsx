import '../styles/Skills.scss'

interface Props {
  name: string
  icon: string
}

export const Skills = ({ name, icon }: Props): JSX.Element => {
  return (
    <div className='skill__tile'>
      <img
        src={`/icons/${icon}`}
        alt={`Icon of ${name}`}
      />
    </div>
  )
}
