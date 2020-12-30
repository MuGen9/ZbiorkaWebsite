import React, { useState } from 'react';
import HomeHeaderTop from './Home/HomeHeaderTop';
import decoration from './../assets/Decoration.svg';
import { Link, useHistory } from 'react-router-dom';

function Register() {
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

    return (
        <div className="register">
            <HomeHeaderTop />
            <div className="register__main">
                <h3>Rejestracja</h3>
                <img className="register__decoration" src={decoration} alt="Decoration" />
                <div className="register__form">
                    <form>
                        <label htmlFor="email">
                            Email: <br />
                            <input type="text" name="email" />
                        </label>
                        <br />
                        <label htmlFor="password">
                            Hasło: <br />
                            <input type="password" name="password" />
                        </label>
                        <br />
                        <label htmlFor="password2">
                            Powtórz hasło: <br />
                            <input type="password" name="password2" />
                        </label>
                    </form>
                </div>
                <div className="register__buttons">
                    <Link to="/logowanie">Zaloguj</Link>
                    <Link to="/">Załóż konto</Link>
                </div>
            </div>
        </div>
    )
}

export default Register;