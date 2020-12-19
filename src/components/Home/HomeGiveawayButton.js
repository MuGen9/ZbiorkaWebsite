import React from 'react';
import { HashLink } from 'react-router-hash-link';

function HomeGiveawayButton() {
    return (
        <div className="home__giveaway__button">
            <HashLink to="/oddaj">Oddaj rzeczy</HashLink>
        </div>
    )
}

export default HomeGiveawayButton;
