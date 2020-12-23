import React from 'react';
import { HashLink } from 'react-router-hash-link';

function HomeDoubleButtons({content, redirect, content2, redirect2}) {
    return (
        <div className="home__buttons">
            <HashLink to={redirect}>{content}</HashLink>
            <HashLink to={redirect2}>{content2}</HashLink>
        </div>
    )
}

export default HomeDoubleButtons;