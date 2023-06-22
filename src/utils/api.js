export const BASE_URL = 'http://127.0.0.1:8080/api/v1';

const token = () => localStorage.getItem('token');

function _checkResponse(res) {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
}

export const generateTimetable = () => {
    return fetch(`${BASE_URL}/table/generate`, {
        method: 'POST',
        headers: {
            authorization: `Bearer ${token()}`,
            'Content-Type': 'application/json'
        }
    })
        .then((response) => response)
};

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

export const getGroup = (id) => {
    return fetch(`${BASE_URL}/table/group/${id}`, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${token()}`,
            'Content-Type': 'application/json'
        }
    })
        .then((response) => _checkResponse(response))
};

export const addGroup = (name, quantity, slots, courses) => {
    return fetch(`${BASE_URL}/groups`, {
        method: 'POST',
        headers: {
            authorization: `Bearer ${token()}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            quantity: quantity,
            slots: slots,
            courses: courses
        })
    })
        .then((response) => _checkResponse(response))
};

export const deleteGroup = (id) => {
    return fetch(`${BASE_URL}/groups/${id}`, {
        method: 'DELETE',
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

export const getTeacher = (id) => {
    return fetch(`${BASE_URL}/table/teacher/${id}`, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${token()}`,
            'Content-Type': 'application/json'
        }
    })
        .then((response) => _checkResponse(response))
};

export const getTheClass = (id) => {
    return fetch(`${BASE_URL}/table/room/${id}`, {
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

export const getCourses = () => {
    return fetch(`${BASE_URL}/courses`, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${token()}`,
            'Content-Type': 'application/json'
        }
    })
        .then((response) => _checkResponse(response))
};

export const getCourse = (id) => {
    return fetch(`${BASE_URL}/courses/${id}`, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${token()}`,
            'Content-Type': 'application/json'
        }
    })
        .then((response) => _checkResponse(response))
};

export const addCourse = (name, tools, frequency, teacher) => {
    return fetch(`${BASE_URL}/courses`, {
        method: 'POST',
        headers: {
            authorization: `Bearer ${token()}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            tools: tools,
            frequency: frequency,
            teacher: teacher
        })
    })
        .then((response) => _checkResponse(response))
};

export const editCourse = (id, name, tools, frequency, teacher) => {
    return fetch(`${BASE_URL}/courses/${id}`, {
        method: 'PATCH',
        headers: {
            authorization: `Bearer ${token()}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            tools: tools,
            frequency: frequency,
            teacher: teacher
        })
    })
        .then((response) => _checkResponse(response))
};

export const deleteCourse = (id) => {
    return fetch(`${BASE_URL}/courses/${id}`, {
        method: 'DELETE',
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

export const addTeacher = (name, slots) => {
    return fetch(`${BASE_URL}/teachers`, {
        method: 'POST',
        headers: {
            authorization: `Bearer ${token()}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            slots: slots
        })
    })
        .then((response) => _checkResponse(response))
};

export const editTeacher = (id, name, slots) => {
    return fetch(`${BASE_URL}/teachers/${id}`, {
        method: 'PATCH',
        headers: {
            authorization: `Bearer ${token()}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            slots: slots
        })
    })
        .then((response) => _checkResponse(response))
};

export const deleteTeacher = (id) => {
    return fetch(`${BASE_URL}/teachers/${id}`, {
        method: 'DELETE',
        headers: {
            authorization: `Bearer ${token()}`,
            'Content-Type': 'application/json'
        }
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

export const editCell = (slot, room, groups, teacher, course) => {
    return fetch(`${BASE_URL}/table/entries`, {
        method: 'POST',
        headers: {
            authorization: `Bearer ${token()}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            slot: slot,
            room: room,
            groups: groups,
            teacher: teacher,
            course: course
        })
    })
        .then((response) => _checkResponse(response))
};

export const getUsers = () => {
    return fetch(`${BASE_URL}/users`, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${token()}`,
            'Content-Type': 'application/json'
        }
    })
        .then((response) => _checkResponse(response))
};

export const addUser = (username, name, password) => {
    return fetch(`${BASE_URL}/register`, {
        method: 'POST',
        headers: {
            authorization: `Bearer ${token()}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: username,
            name: name,
            password: password
        })
    })
        .then((response) => _checkResponse(response))
};

export const deleteUser = (username) => {
    return fetch(`${BASE_URL}/users/${username}`, {
        method: 'DELETE',
        headers: {
            authorization: `Bearer ${token()}`,
            'Content-Type': 'application/json'
        }
    })
        .then((response) => _checkResponse(response))
};

export const checkAdmin = () => {
    return fetch(`${BASE_URL}/roletest/admin`, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${token()}`,
            'Content-Type': 'application/json'
        }
    })
        .then((res) => (res.status))
};
