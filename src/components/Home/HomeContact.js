import React from 'react';
import decoration from './../../assets/Decoration.svg';

function HomeContact() {
    return (
        <div className="home__contact">
            <div className="home__contact__text">
                <h2>Skontaktuj się z nami</h2>
                <img src={decoration} alt="Decoration" />
            </div>
        </div>
    )
}

export default HomeContact;