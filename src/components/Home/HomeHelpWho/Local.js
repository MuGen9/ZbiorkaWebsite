import React, { useState } from 'react';
import Pagination from './Pagination';

function Local() {
    const locals = [ 
        {name: 'Zbiórka "Dbam o zdrowie"', goal: 'Pomoc osobom w trudnej sytuacji życiowej', need: 'ubrania, jedzenie, sprzęt AGD, meble, zabawki'},
        {name: 'Zbiórka "Dla dzieci"', goal: 'Pomoc dzieciom z ubogich rodzin', need: 'ubrania, meble, zabawki'},
        {name: 'Zbiórka "Bez domu"', goal: 'Pomoc dla osób nie posiadających miejsca zamieszkania', need: 'ubrania, jedzenie, ciepłe koce'}
    ];

    const [current, setCurrent] = useState([0,3]);

    const handleCallback = (n) => {
        const first = 3*(n - 1);
        const second = 3*n;
        setCurrent([first, second]);
    }

    return (
        <>
            <h4>Wspieramy lokalne zbiórki organizowane przez indywidualne osoby, <br/>którym zależy na dobru społeczności, w której żyją. <br/>Sam też możesz zorganizować taką zbiórkę i pomóc tym, którzy są najbliżej.</h4>
            {locals.slice(current[0], current[1]).map((local, index) => (
                <div key={index} className="home__help__tile">
                    <div className="home__help__tile--left">
                        <h5>{local.name}</h5>
                        <h6>Cel i misja: {local.goal}</h6>
                    </div>
                    <div className="home__help__tile--right">
                        <h6>{local.need}</h6>
                    </div>
                </div>
            ))}
            <Pagination perPage={3} items={locals} parentCallback={handleCallback} />
        </>
    )
}

export default Local;

