import { createRoot } from 'react-dom/client'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'

import './styles/main.scss'
import './styles/outfit.scss'
import './styles/material.scss'

import { App } from './App'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import { NotFound } from './pages/NotFound'
import { Portfolio } from './pages/Portfolio'

createRoot(document.getElementById('root'))
  .render(
    <Router>
      <App>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about-me' element={<About />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/contact-me' element={<Contact />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </App>
    </Router>
  )
