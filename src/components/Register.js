import React from 'react';
import HomeHeaderTop from './Home/HomeHeaderTop';
import decoration from './../assets/Decoration.svg';
import { Link } from 'react-router-dom';

function Register() {
    return (
        <div className="register">
            <HomeHeaderTop />
            <div className="register__main">
                <h3>Rejestracja</h3>
                <img className="register__decoration" src={decoration} alt="Decoration" />
                <div className="register__form">
                    <form>
                        <label htmlFor="email">
                            Email <br />
                            <input type="text" name="email" />
                        </label>
                        <br />
                        <label htmlFor="password">
                            Hasło <br />
                            <input type="password" name="password" />
                        </label>
                        <br />
                        <label htmlFor="password2">
                            Powtórz hasło <br />
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