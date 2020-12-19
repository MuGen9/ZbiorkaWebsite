import React from 'react';
import { Link } from 'react-router-dom';
import decoration from './../../assets/Decoration.svg';
import { HashLink } from 'react-router-hash-link';
 
function HomeHeader() {
    return (
        <div className="home__header">
            <div className="home__header__login">
                <Link to="/logowanie">Zaloguj</Link>
                <Link to="/rejestracja">Załóż konto</Link>
            </div>
            <div className="home__header__navigation">
                <HashLink to="/#section1">Start</HashLink>
                <HashLink to="/#section1">O co chodzi?</HashLink>
                <HashLink to="/#section1">O nas</HashLink>
                <HashLink to="/#section1">Fundacja i organizacje</HashLink>
                <HashLink to="/#section1">Kontakt</HashLink>
                <HashLink to="/#section1">Treść</HashLink>
            </div>
            <div className="home__header__main">
                <h2>Zacznij pomagać!</h2>
                <h2>Oddaj niechciane rzeczy w zaufane ręce</h2>
                <img src={decoration}></img>
                <div className="home__header__main__buttons">
                    <Link to="/logowanie">ODDAJ RZECZY</Link>
                    <Link to="/logowanie">ZORGANIZUJ ZBIÓRKĘ</Link>
                </div>
            </div>
        </div>
    )
}

export default HomeHeader;
