import './Experiences.css'
import { Link } from 'react-router-dom'

function Experiences() {
  return (
    <main className="experiencesContainer">
        {/* neskor zmenit obe na Route */}
        <Link to="/experiences/search" className="searchExp">Hladat skusenosti</Link>
        <p>alebo</p>
        <Link to="/experiences/add" className="addExp">Pridať skúsenosť</Link>
    </main>
  )
}

export default Experiences