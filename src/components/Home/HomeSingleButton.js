import React from 'react';
import { HashLink } from 'react-router-hash-link';

function HomeSingleButton({content, redirect}) {
    return (
        <div className="home__buttons">
            <HashLink to={redirect}>{content}</HashLink>
        </div>
    )
}

export default HomeSingleButton;
