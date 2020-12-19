import React from 'react';
import shirt from './../../assets/Icon-1.svg';
import bag from './../../assets/Icon-2.svg';
import magnifier from './../../assets/Icon-3.svg';
import circle from './../../assets/Icon-4.svg';

function HomeSteps() {
    return (
        <div className="home__steps__tiles">
            <div className="home__steps__single">
                <img src={shirt} alt="shirt"></img>
                <p>Wybierz rzeczy</p>
                <hr />
                <p>Ubrania, zabawki,</p>
                <p>sprzęt i inne</p>
            </div>
            <div className="home__steps__single">
                <img src={bag} alt="bag"></img>
                <p>Spakuj je</p>
                <hr />
                <p>Skorzystaj z</p>
                <p>worków na śmieci</p>
            </div>
            <div className="home__steps__single">
                <img src={magnifier} alt="magnifier"></img>
                <p>Zdecyduj komu</p>
                <p>chcesz pomóc</p>
                <hr />
                <p>Wybierz zaufane</p>
                <p>miejsce</p>
            </div>
            <div className="home__steps__single">
                <img src={circle} alt="circle"></img>
                <p>Zamów kuriera</p>
                <hr />
                <p>Kurier przyjedzie</p>
                <p>w dogodnym terminie</p>
            </div>
        </div>
    )
}

export default HomeSteps;
