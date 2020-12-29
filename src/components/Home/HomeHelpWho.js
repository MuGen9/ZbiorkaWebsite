import React from 'react';
import decoration from './../../assets/Decoration.svg';


function HomeHelpWho() {

    return (
        <div className="home__help" id="orgs">
            <h2>Komu pomagamy?</h2>
            <img src={decoration} alt="Decoration"></img>
            <div className="home__help__header container">
                <div className="home__help__tile">
                    <h4>Fundacjom</h4>
                </div>
                <div className="home__help__tile">
                    <h4>Organizacjom pozarządowym</h4>                 
                </div>
                <div className="home__help__tile">
                    <h4>Lokalnym zbiórkom</h4>
                </div>
            </div>

        </div>
    )
}

export default HomeHelpWho;
