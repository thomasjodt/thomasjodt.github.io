import { useContext } from 'react'
import { AppContext } from '../context/AppContext'

export const Themes = () => {
  const { setTheme } = useContext(AppContext)
  const toggleTheme = (e) => {
    setTheme(e.innerText.toLowerCase())
  }
  return (
    <aside className='navbar__aside'>
      <button onClick={e => toggleTheme(e.target)}>Light</button>
      <button onClick={e => toggleTheme(e.target)}>Dark</button>
      <button onClick={e => toggleTheme(e.target)}>Space</button>
    </aside>
  )
}
