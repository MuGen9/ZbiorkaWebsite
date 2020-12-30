import React, { useState } from 'react';
import Pagination from './Pagination';

function NonGovernment() {
    const orgs = [ 
        {name: 'Organizacja "Dbam o zdrowie"', goal: 'Pomoc osobom w trudnej sytuacji życiowej', need: 'ubrania, jedzenie, sprzęt AGD, meble, zabawki'},
        {name: 'Organizacja "Dla dzieci"', goal: 'Pomoc dzieciom z ubogich rodzin', need: 'ubrania, meble, zabawki'},
        {name: 'Organizacja "Bez domu"', goal: 'Pomoc dla osób nie posiadających miejsca zamieszkania', need: 'ubrania, jedzenie, ciepłe koce'},
        {name: 'Organizacja "Wszyscy obecni"', goal: 'Pomoc osobom wykluczonym społecznie', need: 'ubrania, jedzenie'},
        {name: 'Organizacja "Dbam o rodzinę"', goal: 'Pomoc osobom w trudnej sytuacji życiowej', need: 'ubrania, meble, jedzenie, ciepłe koce'},
        {name: 'Organizacja "Dbam o przyrodę"', goal: 'Pomoc osobom w trudnej sytuacji życiowej', need: 'ubrania, jedzenie, ciepłe koce'}
    ];

    const [current, setCurrent] = useState([0,3]);

    const handleCallback = (n) => {
        const first = 3*(n - 1);
        const second = 3*n;
        setCurrent([first, second]);
    }

    return (
        <>
            <h4>Pomagamy również wszelkim organizacjom pozarządowym<br/> i charytatywnym, które nie są Fundacjami. Są to nasi Partnerzy, <br/>który zrobią dobry pożytek z rzeczy, które do nich trafią.</h4>
            {orgs.slice(current[0], current[1]).map((org, index) => (
                <div key={index} className="home__help__tile">
                    <div className="home__help__tile--left">
                        <h5>{org.name}</h5>
                        <h6>Cel i misja: {org.goal}</h6>
                    </div>
                    <div className="home__help__tile--right">
                        <h6>{org.need}</h6>
                    </div>
                </div>
            ))}
            <Pagination perPage={3} items={orgs} parentCallback={handleCallback} />
        </>
    )
}

export default NonGovernment;