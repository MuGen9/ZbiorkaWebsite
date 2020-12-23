import React from 'react';
import people from './../../assets/People.jpg';
import decoration from './../../assets/Decoration.svg';
import signature from './../../assets/Signature.svg';

function HomeAbout() {
    return (
        <div className="home__about" id="about">
            <div className="home__about__text">
                <h2>O nas</h2>
                <img src={decoration} alt="Decoration" />
                <p>Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.</p>
                <img className="home__about__signature" src={signature} alt="Signature" />
            </div>
            <img className="home__about__people" src={people} alt="People" />
        </div>
    )
}

export default HomeAbout;
