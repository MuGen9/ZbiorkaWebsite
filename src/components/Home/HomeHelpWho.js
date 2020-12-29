import React, { useState } from 'react';
import decoration from './../../assets/Decoration.svg';
import Foundation from './HomeHelpWho/Foundation';
import NonGovernment from './HomeHelpWho/NonGovernment';
import Local from './HomeHelpWho/Local';

function HomeHelpWho() {
    const [tile, setTile] = useState(1);

    return (
        <div className="home__help" id="orgs">
            <h2>Komu pomagamy?</h2>
            <img src={decoration} alt="Decoration"></img>
            <div className="home__help__header container">
                <h3 onClick={() => setTile(1)} className={tile === 1 ? "active" : ""}>Fundacjom</h3>
                <h3 onClick={() => setTile(2)} className={tile === 2 ? "active" : ""}>Organizacjom pozarządowym</h3>                 
                <h3 onClick={() => setTile(3)} className={tile === 3 ? "active" : ""}>Lokalnym zbiórkom</h3>
            </div>
            <div className="home__help__main">
                { tile === 1 && <Foundation />}
                { tile === 2 && <NonGovernment />}
                { tile === 3 && <Local />}
            </div>
        </div>
    )
}

export default HomeHelpWho;
