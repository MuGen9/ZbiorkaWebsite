import React, { useState } from 'react';
import Pagination from './Pagination';

function Foundation() {
    const foundations = [ 
        {name: 'Fundacja "Dbam o zdrowie"', goal: 'Pomoc osobom w trudnej sytuacji życiowej', need: 'ubrania, jedzenie, sprzęt AGD, meble, zabawki'},
        {name: 'Fundacja "Dla dzieci"', goal: 'Pomoc dzieciom z ubogich rodzin', need: 'ubrania, meble, zabawki'},
        {name: 'Fundacja "Bez domu"', goal: 'Pomoc dla osób nie posiadających miejsca zamieszkania', need: 'ubrania, jedzenie, ciepłe koce'},
        {name: 'Fundacja "Wszyscy obecni"', goal: 'Pomoc osobom wykluczonym społecznie', need: 'ubrania, jedzenie'},
        {name: 'Fundacja "Dbam o rodzinę"', goal: 'Pomoc osobom w trudnej sytuacji życiowej', need: 'ubrania, meble, jedzenie, ciepłe koce'},
        {name: 'Fundacja "Dbam o przyrodę"', goal: 'Pomoc osobom w trudnej sytuacji życiowej', need: 'ubrania, jedzenie, ciepłe koce'},
        {name: 'Fundacja "Dbam o zdrowie1"', goal: 'Pomoc osobom w trudnej sytuacji życiowej1', need: 'ubrania, jedzenie, ciepłe koce'},
        {name: 'Fundacja "Dbam o zdrowie2"', goal: 'Pomoc osobom w trudnej sytuacji życiowej2', need: 'ubrania, jedzenie, ciepłe koce'},
        {name: 'Fundacja "Dbam o zdrowie3"', goal: 'Pomoc osobom w trudnej sytuacji życiowej3', need: 'ubrania, jedzenie, ciepłe koce'}
    ];

    const [current, setCurrent] = useState([0,3]);

    const handleCallback = (n) => {
        const first = 3*(n - 1);
        const second = 3*n;
        setCurrent([first, second]);
    }

    return (
        <>
            <h4>W naszej bazie znajdziesz listę zweryfikowanych Fundacji, <br/>z którymi współpracujemy. Możesz sprawdzić czym się zajmują,<br/> komu pomagają i czego potrzebują.</h4>
            {foundations.slice(current[0], current[1]).map((found, index) => (
                <div key={index} className="home__help__tile">
                    <div className="home__help__tile--left">
                        <h5>{found.name}</h5>
                        <h6>Cel i misja: {found.goal}</h6>
                    </div>
                    <div className="home__help__tile--right">
                        <h6>{found.need}</h6>
                    </div>
                </div>
            ))}
            <Pagination perPage={3} items={foundations.length} parentCallback={handleCallback} />
        </>
    )
}

export default Foundation;
