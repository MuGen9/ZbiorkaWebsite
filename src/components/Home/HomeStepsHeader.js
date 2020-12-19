import React from 'react';
import decoration from './../../assets/Decoration.svg';

function HomeStepsHeader() {
    return (
        <div className="home__steps__header">
            <h2>Wystarczą 4 proste kroki</h2>
            <img src={decoration} alt="Decoration"></img>
        </div>
    )
}

export default HomeStepsHeader;
