import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import * as api from '../../utils/api.js';

function AddUserPopup({ isOpen, onClose, onAddPlace }) {
    const [name, setName] = React.useState('');
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    function handleNameChange(e) {
        setName(e.target.value);
    }

    function handleUsernameChange(e) {
        setUsername(e.target.value);
    }

    function handlePasswordChange(e) {
        setPassword(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();

        api.addUser(username, name, password)
            .then((data) => {
                console.log(data)
            })
            .catch(err => console.log(err));

        setName('');
        setUsername('');
        setPassword('');
        e.target.closest('form').reset();
        onClose();
        // window.location.reload();
    }

    return (
        <PopupWithForm name='add-card' title='💖 Add user 💖' isOpen={isOpen} onClose={onClose} buttonText="Save" onSubmit={handleSubmit}>
            <input
                value={name || ''}
                onChange={handleNameChange}
                type="text"
                placeholder="Name"
                className="popup__text popup__text_type_title"
                required />
            <span className="title-input-error popup__error"></span>
            <input
                value={username || ''}
                onChange={handleUsernameChange}
                type="text"
                placeholder="Username"
                className="popup__text popup__text_type_link"
                required />
            <span className="url-input-error popup__error"></span>
            <input
                value={password || ''}
                onChange={handlePasswordChange}
                type="text"
                placeholder="Password"
                className="popup__text popup__text_type_link"
                required />
            <span className="url-input-error popup__error"></span>

        </PopupWithForm>
    );
}

export default AddUserPopup;
