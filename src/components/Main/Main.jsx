import React from 'react';
import { withRouter, useHistory } from 'react-router-dom';

function Main() {
    const history = useHistory();

    function login() {
        history.push('/signin')
    }

    function view() {
        history.push('/view')
    }

    return (
        <div className="main">
            <button onClick={login} className="main__button">💕 Войти</button>
            <button onClick={view} className="main__button">💕 Просмотр</button>
        </div>
    );
}

export default withRouter(Main);