import '../styles/MainContainer.scss'

export const MainContainer = ({ children, home }) => {
  return (
    <section className={`main__container ${home}`}>
      {children}
    </section>
  )
}
