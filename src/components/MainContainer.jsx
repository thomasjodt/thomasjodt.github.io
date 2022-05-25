import '../styles/MainContainer.css'

export default function MainContainer({ children, home }) {
  return (
    <section className={`main__container ${ home }`} >
      { children }
    </section>
  )
}
