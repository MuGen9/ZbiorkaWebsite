import React from 'react';
import decoration from './../../assets/Decoration.svg';

function HomeContact() {
    return (
        <div className="home__contact" id="contact">
            <div className="home__contact__text">
                <h2>Skontaktuj się z nami</h2>
                <img src={decoration} alt="Decoration" />
                <form className="home__contact__form">
                    <div className="flex__container">
                        <label for="name">
                            Wpisz swoje imię <br />
                            <input type="text" name="name" placeholder="Krzysztof" />
                        </label>
                        <label for="email">
                            Wpisz swój email <br />
                            <input type="text" name="email" placeholder="abc@xyz.pl"/>
                        </label>
                    </div>
                    <label for="message">
                        Wpisz swoją wiadomość <br />
                        <textarea name="message" placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tristique vestibulum justo eget consequat. Ut vehicula porttitor nulla, vel egestas libero finibus non. Mauris non vestibulum neque, non mattis eros. Quisque sit amet tellus in massa maximus mattis a a purus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed." /><br />
                    </label>
                </form>
            </div>
        </div>
    )
}

export default HomeContact;