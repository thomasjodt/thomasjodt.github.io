import '../styles/Portfolio.css'
import '../assets/info'
import MainContainer from './MainContainer'

import Project      from './Project'
import { projects } from '../assets/info'

export default function Portfolio() {
  return (
    <MainContainer >
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
    </MainContainer>
  )
}
