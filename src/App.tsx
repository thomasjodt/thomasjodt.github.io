import { Route, Routes, HashRouter as Router } from 'react-router-dom'
import { AppProvider } from './context/AppContext'
import { Layout } from './layout/Layout'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import { Home } from './pages/Home'
import { NotFound } from './pages/NotFound'
import { Portfolio } from './pages/Portfolio'

export const App = (): JSX.Element => {
  return (
    <>
      <Router>
        <AppProvider>
          <Layout>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/portfolio' element={<Portfolio />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </Layout>
        </AppProvider>
      </Router>
    </>
  )
}
