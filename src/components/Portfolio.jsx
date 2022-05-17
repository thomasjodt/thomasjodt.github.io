import '../styles/Portfolio.css'
import Project from './Project'
import '../assets/info'
import { projects } from '../assets/info'

export default function Portfolio() {
  return (
    <div className='main__container' >
      <h2 className='portfolio__title' >My projects</h2>
      <section className='projects__grid' >
        {projects.map(e => (
          <Project 
            url={e.url}
            name={e.name}
            image={e.image}
            key={e.name} />
        ))}
      </section>
    </div>
  )
}
