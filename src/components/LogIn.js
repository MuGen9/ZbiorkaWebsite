import React from 'react';
import HomeHeaderTop from './Home/HomeHeaderTop';
import decoration from './../assets/Decoration.svg';
import { Link } from 'react-router-dom';

function LogIn() {
    return (
        <div className="login">
            <HomeHeaderTop />
            <div className="login__main">
                <h3>Logowanie</h3>
                <img className="login__decoration" src={decoration} alt="Decoration" />
                <div className="login__form">
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
                    </form>
                </div>
                <div className="login__buttons">
                    <Link to="/rejestracja">Załóż konto</Link>
                    <Link to="/">Zaloguj</Link>
                </div>
            </div>
        </div>
    )
}

export default LogIn;
