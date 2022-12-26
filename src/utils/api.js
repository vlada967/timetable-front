export const BASE_URL = 'http://127.0.0.1:8080/api/v1';

const token = () => localStorage.getItem('token');

function _checkResponse(res) {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
}

export const getClasses = () => {
    return fetch(`${BASE_URL}/rooms`, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${token()}`,
            'Content-Type': 'application/json'
        }
    })
        .then((response) => _checkResponse(response))
};

export const getGroups = () => {
    return fetch(`${BASE_URL}/groups`, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${token()}`,
            'Content-Type': 'application/json'
        }
    })
        .then((response) => _checkResponse(response))
};

export const getTeachers = () => {
    return fetch(`${BASE_URL}/teachers`, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${token()}`,
            'Content-Type': 'application/json'
        }
    })
        .then((response) => _checkResponse(response))
};

export const getClass = (id) => {
    return fetch(`${BASE_URL}/rooms/${id}`, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${token()}`,
            'Content-Type': 'application/json'
        }
    })
        .then((response) => _checkResponse(response))
};

export const getSlots = () => {
    return fetch(`${BASE_URL}/slots`, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${token()}`,
            'Content-Type': 'application/json'
        }
    })
        .then((response) => _checkResponse(response))
};

export const addClass = (name, capacity, tools, slots) => {
    return fetch(`${BASE_URL}/rooms`, {
        method: 'POST',
        headers: {
            authorization: `Bearer ${token()}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            capacity: capacity,
            tools: tools,
            slots: slots
        })
    })
        .then((response) => _checkResponse(response))
};

export const editClass = (id, name, capacity, tools, slots) => {
    return fetch(`${BASE_URL}/rooms/${id}`, {
        method: 'PATCH',
        headers: {
            authorization: `Bearer ${token()}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            capacity: capacity,
            tools: tools,
            slots: slots
        })
    })
        .then((response) => _checkResponse(response))
};

export const deleteClass = (id) => {
    return fetch(`${BASE_URL}/rooms/${id}`, {
        method: 'DELETE',
        headers: {
            authorization: `Bearer ${token()}`,
            'Content-Type': 'application/json'
        }
    })
        .then((response) => _checkResponse(response))
};

