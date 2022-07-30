import '../styles/Portfolio.scss'
import { projects } from '../assets/info'
import { MainContainer } from '../components/MainContainer'

import { Project } from '../components/Project'

export const Portfolio = () => {
  return (
    <MainContainer home='portfolio'>
      <h2 className='portfolio__title'>My projects</h2>
      <section className='projects__grid'>
        {projects.map(e => (
          <Project
            key={e.name}
            url={e.url}
            name={e.name}
            image={e.image}
            tags={e.tags}
            description={e.description}
          />
        ))}
      </section>
    </MainContainer>
  )
}
