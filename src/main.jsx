import { createRoot } from 'react-dom/client'

import './styles/main.scss'
import './styles/outfit.scss'

import { App } from './App'

createRoot(document.getElementById('root'))
  .render(
    <App />
  )
