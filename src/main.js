import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import App from './App'
import About from './components/About'
import Home from './components/Home'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import NotFound from './components/NotFound'

createRoot(document.getElementById('root'))
.render(
  <BrowserRouter>
    <App>
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about-me' element={<About />} />
      <Route path='/portfolio' element={<Portfolio />} />
      <Route path='/contact-me' element={<Contact />} />
      </Routes>
    </App>
  </BrowserRouter>
)