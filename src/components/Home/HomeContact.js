import React, { useState } from 'react';
import decoration from './../../assets/Decoration.svg';

function HomeContact() {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [errors, setErrors] = useState({ nameError: "", emailError: "", messageError: "" });

    const handleSubmit = e => {
        e.preventDefault();
        console.log(e);
        validateName();
        // validateEmail();
        // validateMessage();
    }

    const handleChange = e => {
        const {name, value} = e.target;
        setForm(prevState => {
            return {
              ...prevState,
              [name]: value
            }
        });
    }

    const validateName = () => {
        console.log(form);
    }

    return (
        <div className="home__contact" id="contact">
            <div className="home__contact__text">
                <h2>Skontaktuj się z nami</h2>
                <img src={decoration} alt="Decoration" />
                <form className="home__contact__form" onSubmit={handleSubmit}>
                    <div className="flex__container">
                        <label htmlFor="name">
                            Wpisz swoje imię <br />
                            <input type="text" name="name" onChange={handleChange} placeholder="Krzysztof" />
                            <span>{errors.nameError}</span>
                        </label>
                        <label htmlFor="email">
                            Wpisz swój email <br />
                            <input type="text" name="email" onChange={handleChange} placeholder="abc@xyz.pl"/>
                            <span>{errors.emailError}</span>
                        </label>
                    </div>
                    <label htmlFor="message">
                        Wpisz swoją wiadomość <br />
                        <textarea name="message" onChange={handleChange} placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tristique vestibulum justo eget consequat. Ut vehicula porttitor nulla, vel egestas libero finibus non. Mauris non vestibulum neque, non mattis eros. Quisque sit amet tellus in massa maximus mattis a a purus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed." /><br />
                        <span>{errors.messageError}</span>
                    </label>
                    <button type="submit">Wyślij</button>
                </form>
            </div>
        </div>
    )
}

export default HomeContact;