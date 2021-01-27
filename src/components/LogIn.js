import React, { useState } from 'react';
import HomeHeaderTop from './Home/HomeHeaderTop';
import decoration from './../assets/Decoration.svg';
import { Link, useHistory } from 'react-router-dom';
import { Validator } from '../services/Validator';

function LogIn() {
    const [form, setForm] = useState({ email: "", password: "" });
    const [errors, setErrors] = useState({ emailError: "", passwordError: "" });

    const history = useHistory();

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

        if(validateEmail() && validatePass()) {
            console.log('Zalogowano!');
            history.push("/");
        } else {
            console.log('Popraw błędy');
        }
    }

    const validateEmail = () => {
        // const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        // let valid = re.test(String(form.email).toLowerCase());
        let valid = Validator.checkEmail(form.email);
        
        setErrors(prevState => ({
            ...prevState,
            emailError: valid ? "" : "Nieprawidłowy email"
        }));

        return valid;
    }

    const validatePass = () => {
        let valid = form.password.length > 5
        
        setErrors(prevState => ({
            ...prevState,
            passwordError: valid ? "" : "Przynajmniej 6 znaków"
        }));

        return valid;       
    }

    const handleLogIn = (e) => {
        e.preventDefault();

        if(validateEmail() && validatePass()) {
            console.log('Zalogowano!')
            history.push("/");
        } else {
            console.log('Popraw błędy')
        }
    }

    return (
        <div className="login">
            <HomeHeaderTop />
            <div className="login__main">
                <h3>Logowanie</h3>
                <img className="login__decoration" src={decoration} alt="Decoration" />
                <div className="login__form">
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="email">
                            Email: <br />
                            <input type="text" name="email" onChange={handleChange} onBlur={validateEmail} value={form.email} /><br/>
                            <span>{errors.emailError}</span>
                        </label>
                        <br />
                        <label htmlFor="password">
                            Hasło: <br />
                            <input type="password" name="password" onChange={handleChange} onBlur={validatePass} value={form.password} /><br/>
                            <span>{errors.passwordError}</span>
                        </label>
                    </form>
                </div>
                <div className="login__buttons">
                    <Link to="/rejestracja">Załóż konto</Link>
                    <Link to="/" onClick={handleLogIn}>Zaloguj</Link>
                </div>
            </div>
        </div>
    )
}

export default LogIn;
