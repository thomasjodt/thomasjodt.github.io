import '../styles/About.css'
import Skills from './Skills'
import '../assets/info'
import { skills } from '../assets/info'

export default function About() {
  return (
    <div className='about__container main__container' >
      <img
        className='main__image'
       src={require('../assets/images/logo.png')} />
      <h2 className='about__title' >About me</h2>
      <p className='about__content' >My name is Orlando Díaz Torrealva (Thomas). I am 22 years old and i consider myself a persevering person and self thaught. Although i still do not hace experience, i have the necessary knowledge to work in the area of Web Development. My favorite technology to develop is React.
        My goal as a developer is to design and create solutions for toda's needs, applying my knowledge in this area.
      </p>
      <h2 className='about__title' >My skills</h2>
      <div className='skills__container' >
          {skills.map(e => (
            <Skills
            key={e.name} 
            name={e.name}
            icon={e.icon} />
          ))}
          
      </div>
    </div>
  )
}
