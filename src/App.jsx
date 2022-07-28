import './styles/App.scss'
import { Navbar } from './components/Navbar'

export const App = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}
