import React, { useState } from 'react';
import HomeHeaderTop from './Home/HomeHeaderTop';
import decoration from './../assets/Decoration.svg';
import { Link, useHistory } from 'react-router-dom';

function Register() {
    const [form, setForm] = useState({ email: "", password: "", password2: "" });
    const [errors, setErrors] = useState({ emailError: "", passwordError: "", password2Error: "" });

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

    const validateEmail = () => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let valid = re.test(String(form.email).toLowerCase());

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

    const validatePass2 = () => {
        let valid = form.password2.length > 5 && form.password === form.password2
        
        setErrors(prevState => ({
            ...prevState,
            password2Error: valid ? "" : "Nieprawidłowe hasło"
        }));

        return valid;       
    }

    const handleRegister = (e) => {
        e.preventDefault();

        if(validateEmail() && validatePass() && validatePass2()) {
            console.log('Zarejestrowano!')
            history.push("/");
        } else {
            console.log('Popraw błędy')
        }
    }

    return (
        <div className="register">
            <HomeHeaderTop />
            <div className="register__main">
                <h3>Rejestracja</h3>
                <img className="register__decoration" src={decoration} alt="Decoration" />
                <div className="register__form">
                    <form onSubmit={handleRegister}>
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
                        <br />
                        <label htmlFor="password2">
                            Powtórz hasło: <br />
                            <input type="password" name="password2" onChange={handleChange} onBlur={validatePass2} value={form.password2} /><br/>
                            <span>{errors.password2Error}</span>
                        </label>
                    </form>
                </div>
                <div className="register__buttons">
                    <Link to="/logowanie">Zaloguj</Link>
                    <Link to="/" onClick={handleRegister}>Załóż konto</Link>
                </div>
            </div>
        </div>
    )
}

export default Register;