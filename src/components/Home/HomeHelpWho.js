import React from 'react';
import decoration from './../../assets/Decoration.svg';

function HomeHelpWho() {
    return (
        <div className="home__help" id="orgs">
            <h2>Komu pomagamy?</h2>
            <img src={decoration} alt="Decoration"></img>
            <div className="home__help__container container">
                <div className="home__help__tile">
                    <h4>Fundacjom</h4>
                    <p>W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</p>
                </div>
                <div className="home__help__tile">
                    <h4>Organizacjom pozarządowym</h4>
                    <p>Pomagamy również wszelkim organizacjom pozarządowym i charytatywnym, które nie są Fundacjami. Są to nasi Partnerzy, który zrobią dobry pożytek z rzeczy, które do nich trafią.</p>
                </div>
                <div className="home__help__tile">
                    <h4>Lokalnym zbiórkom</h4>
                    <p>Wspieramy lokalne zbiórki organizowane przez indywidualne osoby, którym zależy na dobru społeczności, w której żyją. Sam też możesz zorganizować taką zbiórkę i pomóc tym, którzy są najbliżej.</p>
                </div>
            </div>
        </div>
    )
}

export default HomeHelpWho;
