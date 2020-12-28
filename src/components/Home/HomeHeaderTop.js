import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';

function HomeHeaderTop() {
    return (
        <div className="home__header ">
            <div className="container">
                <div className="home__header__login">
                    <Link to="/wylogowano">Wyloguj</Link>
                    <Link to="/logowanie">Zaloguj</Link>
                    <Link to="/rejestracja">Załóż konto</Link>
                </div>
                <div className="home__header__navigation">
                    <HashLink smooth to="/#start">Start</HashLink>
                    <HashLink to="/#steps">O co chodzi?</HashLink>
                    <HashLink to="/#about">O nas</HashLink>
                    <HashLink to="/#orgs">Fundacja i organizacje</HashLink>
                    <HashLink to="/#contact">Kontakt</HashLink>
                </div>
            </div>
        </div>
    )
}

export default HomeHeaderTop;