import '../styles/MainContainer.css'

export default function MainContainer({ children }) {
  return (
    <section className='main__container'>
      { children }
    </section>
  )
}
