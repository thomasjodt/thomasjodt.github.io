import { useContext } from 'react'
import { Navbar } from '../components/Navbar'
import { AppContext, type ThemeContextType } from '../context/AppContext'

interface Props {
  children: JSX.Element | JSX.Element[]
}

export const Layout = ({ children }: Props): JSX.Element => {
  const { theme } = useContext(AppContext) as ThemeContextType
  return (
    <div
      style={style}
      className={theme}
    >
      <Navbar />
      {children}
    </div>
  )
}

const style = {
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  minHeight: '100vh',
  alignItems: 'center'
}
