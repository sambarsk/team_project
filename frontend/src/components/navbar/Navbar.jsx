import { Link } from 'react-router-dom'

import './Navbar.css'

function Navbar(){
    return(
        <header className="mainNavbar">
            <div className="webBrand">
                <h1 className="webLogo"> 💚</h1>
                <div className="webTitle">
                    <h1>Zdravotná dostupnosť</h1>
                    <h2>Skúsenosti pacientov</h2>
                </div>
            </div>
            <nav>
                <Link to="/">Domov</Link>
                <Link to="/experiences">Skúsenosti</Link>
            </nav>
        </header>
    )
}

export default Navbar

