import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import UeberUns from './pages/UeberUns.jsx'
import Termine from './pages/Termine.jsx'
import Galerie from './pages/Galerie.jsx'
import MitgliedWerden from './pages/MitgliedWerden.jsx'
import Kontakt from './pages/Kontakt.jsx'
import Mitgliederbereich from './pages/Mitgliederbereich.jsx'
import Impressum from './pages/Impressum.jsx'
import Datenschutz from './pages/Datenschutz.jsx'
import NotFound from './pages/NotFound.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="/ueber-uns" element={<UeberUns />} />
          <Route path="/termine" element={<Termine />} />
          <Route path="/galerie" element={<Galerie />} />
          <Route path="/mitglied-werden" element={<MitgliedWerden />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="/mitgliederbereich" element={<Mitgliederbereich />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
