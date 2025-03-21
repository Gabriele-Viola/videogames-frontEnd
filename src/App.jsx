import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import Deflayout from './layouts/deflayout'
import HomaPage from './pages/HomePage'
import ShowPage from './pages/ShowPage'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Deflayout />}>
            <Route index element={<HomaPage />} />
            <Route path='/videogame/:id' element={<ShowPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
