import '@styles/Portfolio.css'
import Project from './Project'
import { projects } from '../assets/info'
import { v4 } from 'uuid'

export default function Portfolio() {
  return (
    <section id='Portfolio' >
      <h2 className='portfolio-title' >Projects</h2>

      {projects.map((project) => (
        <Project
          url={project.url}
          image={project.image}
          name={project.name} />
      ))}

    </section>
  )
}
