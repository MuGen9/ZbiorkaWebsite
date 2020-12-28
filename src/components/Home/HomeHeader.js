import React from 'react';
import decoration from './../../assets/Decoration.svg';
import banner from './../../assets/Home-Hero-Image.jpg';
import HomeDoubleButtons from './HomeDoubleButtons';
 
function HomeHeader() {
    return (
        <div className="home__header" id="start">
            <div className="container" style={{display: 'flex'}}>
                <img className="banner" src={banner} alt="Banner" />
                <div className="home__header__main">
                    <h2>Zacznij pomagać!</h2>
                    <h2>Oddaj niechciane rzeczy w zaufane ręce</h2>
                    <img src={decoration} alt="Decoration" />
                    <HomeDoubleButtons content={'Zaloguj'} redirect={'/logowanie'} content2={'Załóż konto'} redirect2={'/rejestracja'}/>
                </div>
            </div>
        </div>
    )
}

export default HomeHeader;
