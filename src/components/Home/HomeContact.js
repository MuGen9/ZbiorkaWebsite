import React, { useState } from 'react';
import { ContactService } from '../../services/ContactService';
import decoration from './../../assets/Decoration.svg';

function HomeContact() {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [errors, setErrors] = useState({ nameError: "", emailError: "", messageError: "" });
    const [success, setSuccess] = useState(false);

    const handleChange = e => {
        const {name, value} = e.target;
        setForm(prevState => {
            return {
              ...prevState,
              [name]: value
            }
        });
    }

    const handleSubmit = e => {
        e.preventDefault();

        if(validateForm()) {
            sendForm();
        } else {
            setSuccess(false);
        }
    }

    const validateForm = ()=>{
        return (
            validateName() && 
            validateEmail() && 
            validateMessage()
        )
    }

    const sendForm = () => {
        
        ContactService.send(form.name, form.email, form.message, (response) => {
            setSuccess(true);
        });
        
        // const APIurl = 'https://fer-api.coderslab.pl/v1/portfolio/contact'
        // const requestOptions = {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(form)
        // };

        // fetch(APIurl, requestOptions)
        //     .then(response => {
        //         setSuccess(true);
        //         console.log(response);
        //     })
        //     .catch(error => console.log('Error:', error));
    }

    const validateName = () => {
        if (form.name.length === 0) {
            setErrors(prevState => ({
                ...prevState,
                nameError: "Puste pole"
            }));
            return false;
        }

        let valid = form.name.trim().split(" ").length === 1;
        
        setErrors(prevState => ({
            ...prevState,
            nameError: valid ? "" : "Podaj jeden wyraz"
        }));

        return valid;       
    }

    const validateEmail = () => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let valid = re.test(String(form.email).toLowerCase());

        setErrors(prevState => ({
            ...prevState,
            emailError: valid ? "" : "Nieprawidłowy email"
        }));

        return valid;
    }

    const validateMessage = () => {
        let valid = form.message.length > 119;

        setErrors(prevState => ({
            ...prevState,
            messageError: valid ? "" : "Minimum 120 znaków"
        }));

        return valid;
    }

    return (
        <div className="home__contact" id="contact">
            <div className="home__contact__text">
                <h2>Skontaktuj się z nami</h2>
                <img src={decoration} alt="Decoration" />
                <form className="home__contact__form" onSubmit={handleSubmit}>
                    <div className="flex__container">
                        <label htmlFor="name">
                            Wpisz swoje imię: <br />
                            <input type="text" name="name" onChange={handleChange} onBlur={validateName} value={form.name} placeholder="Krzysztof" />
                            {errors.nameError.length>0 && <span>{errors.nameError}</span>}
                        </label>
                        <label htmlFor="email">
                            Wpisz swój email: <br />
                            <input type="text" name="email" onChange={handleChange} onBlur={validateEmail} value={form.email} placeholder="abc@xyz.pl"/>
                            <span>{errors.emailError}</span>
                        </label>
                    </div>
                    <label htmlFor="message">
                        Wpisz swoją wiadomość: <br />
                        <textarea name="message" onChange={handleChange} onBlur={validateMessage} value={form.message} placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tristique vestibulum justo eget consequat. Ut vehicula porttitor nulla, vel egestas libero finibus non. Mauris non vestibulum neque, non mattis eros. Quisque sit amet tellus in massa maximus mattis a a purus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed." /><br />
                        <span>{errors.messageError}</span>
                    </label>
                    <button type="submit">Wyślij</button>
                </form>
                {success && <span style={{ color: 'green', marginTop: '20px' }}>Wiadomość wysłana!</span>}
            </div>
        </div>
    )
}

export default HomeContact;