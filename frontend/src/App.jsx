import { useState } from 'react'
import './App.css'

import Navbar from './components/Navbar'

function App() {
  return (
    <>
      <Navbar />
      <main className="homeContainer">
        <h2>Ako dostupná je zdravotná starostlivosť?</h2>
        <p>
          Zdieľajte svoje skúsenosti s čakacími dobami
          a poplatkami za zdravotnú starostlivosť.
        </p>
        <button>Pridať skúsenosť</button>
      </main>
    </>
  )
}

export default App