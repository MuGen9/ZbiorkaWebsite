import React from 'react';
import facebook from './../../assets/Facebook.svg';
import instagram from './../../assets/Instagram.svg';

function HomeFooter() {
    return (
        <div className="home__footer">
            <p>Copyright by Coders Lab</p>
            <div className="home__footer__icons">
                <a href="https://www.facebook.com/">
                    <img src={facebook} alt="Facebook" />
                </a>
                <a href="https://www.instagram.com/">
                    <img src={instagram} alt="Instagram" />
                </a>
            </div>
            
        </div>
    )
}

export default HomeFooter;
