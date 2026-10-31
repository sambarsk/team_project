import { Link } from 'react-router-dom'

import './Home.css'

function Home() {
  return (
    <main>
      <section className="mainSection">
        <h1>Ako dostupná je zdravotná starostlivosť?</h1>
        <h2>
          Zdieľajte svoje skúsenosti s čakacími dobami
          a poplatkami za zdravotnú starostlivosť.
        </h2>

        <Link to="/experiences/add">Pridať skúsenosť</Link>
      </section>
      <section className="latestExperiences">
        <li>
            <ul>experience A</ul>
            <ul>experience B</ul>
            <ul>experience C</ul>
            <ul>experience D</ul>
        </li>
      </section>
    </main>
  )
}

export default Home