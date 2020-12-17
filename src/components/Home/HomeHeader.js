import React from 'react';
import { Link } from 'react-router-dom';
import { Link as LinkScroll, animateScroll as scroll } from 'react-scroll';
import decoration from './../../assets/Decoration.svg';
 
function HomeHeader() {
    return (
        <div className="home__header">
            <div className="home__header__login">
                <Link to="/logowanie">Zaloguj</Link>
                <Link to="/rejestracja">Załóż konto</Link>
            </div>
            <div className="home__header__navigation">
                <LinkScroll spy={true} smooth={true} duration={500} to='section1'>Start</LinkScroll>
                <LinkScroll to='section2'>O co chodzi?</LinkScroll>
                <LinkScroll to='section3'>O nas</LinkScroll>
                <LinkScroll spy={true} smooth={true} duration={500} to='section1'>Fundacja i organizacje</LinkScroll>
                <LinkScroll spy={true} smooth={true} duration={500} to='section1'>Kontakt</LinkScroll>
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
