import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import Deflayout from './layouts/deflayout'
import HomaPage from './pages/HomePage'
import ShowPage from './pages/ShowPage'
import AboutPage from './pages/AboutPage'
import ContactsPage from './pages/ContactsPage'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Deflayout />}>
            <Route path='/' element={<HomaPage />} />
            <Route path='/videogame/:id' element={<ShowPage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/contact' element={<ContactsPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
