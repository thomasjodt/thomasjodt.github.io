import { createContext, useState } from 'react'

interface Props {
  children: JSX.Element | JSX.Element[]
}

export interface ThemeContextType {
  theme: string
  changeTheme: (theme: string) => void
}

export const AppContext = createContext({})

export const AppProvider = ({ children }: Props): JSX.Element => {
  const [theme, setTheme] = useState<string>('light')
  const changeTheme = (newTheme: string): void => { setTheme(newTheme) }

  return (
    <AppContext.Provider value={{ theme, changeTheme }}>
      {children}
    </AppContext.Provider>
  )
}
