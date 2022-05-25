import './styles/App.css'
import Navbar from './components/Navbar'

export default function App({ children }) {
  
  return (
    <>
      <Navbar />
      { children }
    </>
  )
}