import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import Deflayout from './layouts/deflayout'
import HomaPage from './pages/HomePage'

function App() {


  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route element={<Deflayout/>}>
          <Route index element={<HomaPage/>}/>
        </Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
