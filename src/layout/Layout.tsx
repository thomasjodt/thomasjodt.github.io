import { useContext, useEffect } from 'react'
import { AppContext, type ThemeContextType } from '../context/AppContext'

import { Navbar } from '../components/Navbar'

interface Props {
  children: JSX.Element | JSX.Element[]
}

export const Layout = ({ children }: Props): JSX.Element => {
  const { theme } = useContext(AppContext) as ThemeContextType

  useEffect(() => {
    document.body.className = theme
  }, [theme])

  return (
    <div style={style}>
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
