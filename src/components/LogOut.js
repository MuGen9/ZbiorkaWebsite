import React from 'react';
import HomeHeaderTop from './Home/HomeHeaderTop';
import decoration from './../assets/Decoration.svg';
import { Link } from 'react-router-dom';

function LogOut() {
    return (
        <div className="login">
            <HomeHeaderTop />
            <div className="login__main">
                <h3>Pomyślnie wylogowano!</h3>
                <img className="login__decoration" src={decoration} alt="Decoration" />
                <div className="login__buttons">
                    <Link to="/">Strona główna</Link>
                </div>
            </div>
        </div>
    )
}

export default LogOut;