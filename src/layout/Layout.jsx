import { useContext } from 'react'
import { Navbar } from '../components/Navbar'
import { AppContext } from '../context/AppContext'

export const Layout = ({ children }) => {
  const { theme } = useContext(AppContext)
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
