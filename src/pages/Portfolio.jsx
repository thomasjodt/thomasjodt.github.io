import '../styles/Portfolio.scss'
import { projects } from '../assets/info'
import { MainContainer } from '../components/MainContainer'

import { Project } from '../components/Project'

export const Portfolio = () => {
  return (
    <MainContainer>
      <h2 className='portfolio__title'>My projects</h2>
      <section className='projects__grid'>
        {projects.map(e => (
          <Project
            url={e.url}
            name={e.name}
            image={e.image}
            key={e.name}
          />
        ))}
      </section>
    </MainContainer>
  )
}
