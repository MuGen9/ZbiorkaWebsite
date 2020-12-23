import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';

function HomeHeaderTop() {
    return (
        <div className="home__header ">
            <div className="container">
                <div className="home__header__login">
                    <Link to="/logowanie">Zaloguj</Link>
                    <Link to="/rejestracja">Załóż konto</Link>
                </div>
                <div className="home__header__navigation">
                    <HashLink smooth to="/#section1">Start</HashLink>
                    <HashLink to="/#section1">O co chodzi?</HashLink>
                    <HashLink to="/#section1">O nas</HashLink>
                    <HashLink to="/#section1">Fundacja i organizacje</HashLink>
                    <HashLink to="/#section1">Kontakt</HashLink>
                    <HashLink to="/#section1">Treść</HashLink>
                </div>
            </div>
        </div>
    )
}

export default HomeHeaderTop;