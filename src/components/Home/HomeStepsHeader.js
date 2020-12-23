import React from 'react';
import decoration from './../../assets/Decoration.svg';

function HomeStepsHeader() {
    return (
        <div className="home__steps__header" id="steps">
            <div className="container">
                <h2>Wystarczą 4 proste kroki</h2>
                <img src={decoration} alt="Decoration"></img>
            </div>
        </div>
    )
}

export default HomeStepsHeader;
