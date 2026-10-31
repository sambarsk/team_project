import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'
import Navbar from './components/navbar/Navbar'

import Home from './pages/Home'
import Experiences from './pages/Experiences'
import ExperiencesSearch from './pages/ExperiencesSearch'
import ExperiencesForm from './pages/ExperiencesForm'

// este mozme pridat stranku O Nas, ale to az na konci projektu
function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experiences" element={<Experiences />} />
        <Route path="/experiences/search" element={<ExperiencesSearch />} />
        <Route path="/experiences/add" element={<ExperiencesForm />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App