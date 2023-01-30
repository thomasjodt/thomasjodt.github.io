import { useContext } from 'react'
import { AppContext, type ThemeContextType } from '../context/AppContext'

export const Themes = (): JSX.Element => {
  const { changeTheme } = useContext(AppContext) as ThemeContextType

  return (
    <aside className='navbar__aside'>
      <button onClick={() => { changeTheme('light') }}>Light</button>
      <button onClick={() => { changeTheme('dark') }}>Dark</button>
    </aside>
  )
}
