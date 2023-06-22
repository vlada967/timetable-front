import React from 'react';
import { withRouter } from 'react-router-dom';

function Login({ onLogin }) {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [emailWrong, setEmailWrong] = React.useState(true);
    const [passwordWrong, setPasswordWrong] = React.useState(true);
    const [emailError, setEmailError] = React.useState('');
    const [passwordError, setPasswordError] = React.useState('');
    const [isActive, setIsActive] = React.useState(false);

    React.useEffect(() => {
        setIsActive(false);
        if (!emailWrong && !passwordWrong) {
            setIsActive(true);
        }
    }, [emailWrong, passwordWrong])

    function handleEmailChange(e) {
        setEmail(e.target.value);
        validateEmail(e.target.value);
    }

    function handlePasswordChange(e) {
        setPassword(e.target.value);
        validatePassword(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (!email || !password) {
            return;
        }
        onLogin(email, password);
        resetForm();
    }

    function resetForm() {
        setEmail('');
        setPassword('');
    }

    function validateEmail(email) {
        const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (!email) {
            setEmailWrong(true);
            setEmailError('Введите логин');
        } else {
            setEmailWrong(false);
            setEmailError('');
        }
    }

    function validatePassword(password) {
        if (!password) {
            setPasswordWrong(true);
            setPasswordError('Введите пароль');
        } else {
            setPasswordWrong(false);
            setPasswordError('');
        }
    }

    return (
        <div className="login">
            <h2 className="login__title">💓 💖 💝 Sign In 💕 🎀 🌸</h2>
            <form onSubmit={handleSubmit} className="login__form">
                <div className="login__cont">
                    <h3 className="login__subtitle">Email:</h3>
                    <div className="login__div">
                        <input className="login__input" onChange={handleEmailChange} required />
                        {(emailWrong && emailError) && <div className="login__error">{emailError}</div>}
                    </div>

                </div>
                <div className="login__cont">
                    <h3 className="login__subtitle">Password:</h3>
                    <div className="login__div">
                        <input type="password" className="login__input" onChange={handlePasswordChange} required />
                        {(passwordWrong && passwordError) && <div className="login__error">{passwordError}</div>}
                    </div>

                </div>
                <button className="" className={isActive ? "login__submit login__active" : "login__submit"} disabled={isActive ? false : false}>Sign In</button>
            </form>
        </div>
    );
}

export default withRouter(Login);
