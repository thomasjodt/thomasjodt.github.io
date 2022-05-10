import '@styles/About.css'
import profile from "../assets/images/me.jpg"
import Skill from './Skill'
import { skills } from '../assets/info'

export default function About() {
  return (
    <section id='About' >
      <h2 className='about-title' >Who am i?</h2>
      <div className='card-info info-about-me' >
        <img
          src={profile}
          alt="Profile Photo" />
        
        <div className='info-container' >
          <h3>Hi! I am Orlando Díaz (Thomas).</h3>
          <p>
            I am a Web Developer specialized in Frontend Developing, i like to code and enjoy doing it. <br />
            My studies based on this area were trough Platzi, freeCodeCamp and other platforms to gain more experience.
          </p>
        </div>
        {/* <a
          href='#'
          className='btn' >
            Download CV
        </a> */}
      </div>
      <h2 className='about-title' >My Skills</h2>
      <div className='card-info skills-container' >
        {skills.map(skill => (
          <Skill
          icon={skill.icon} 
          iconName={skill.name} />
        ))}
      </div>
    </section>
  )
}
