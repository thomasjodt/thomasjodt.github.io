import '../styles/MainContainer.scss'

interface Props {
  children: JSX.Element | JSX.Element[]
  home: string
}

export const MainContainer = ({ children, home = '' }: Props): JSX.Element => {
  return (
    <section className={`main__container ${home}`}>
      {children}
    </section>
  )
}
