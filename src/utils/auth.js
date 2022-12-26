export const BASE_URL = 'http://127.0.0.1:8080/api/v1';

function _checkResponse(res) {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
}

export const authorize = (email, password) => {
    return fetch(`${BASE_URL}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username: email, password })
    })
        .then((response) => _checkResponse(response))
        .then((data) => {
            if (data.token) {
                localStorage.setItem('token', data.token);
                return data;
            }
        })
};