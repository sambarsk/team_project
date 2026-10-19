import { useState } from 'react'
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
                <a href="/">Domov</a>
                <a href="/experiences">Skúsenosti</a>
                <a href="/submit">Pridať skúsenosť</a>
            </nav>
        </header>
    )


}

export default Navbar

