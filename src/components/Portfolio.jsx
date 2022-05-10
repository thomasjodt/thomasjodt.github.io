import '@styles/Portfolio.css'
import Project from './Project'
import { projects } from '../assets/info'

export default function Portfolio() {
  return (
    <section id='Portfolio' >
      <h2 className='portfolio-title' >Projects</h2>
      <section className="projects-layout">
        
      {projects.map((project) => (
        <Project
        url={project.url}
        image={project.image}
        name={project.name} />
        ))}

        </section>
    </section>
  )
}
