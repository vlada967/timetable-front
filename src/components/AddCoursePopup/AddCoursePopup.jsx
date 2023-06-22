import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import * as api from '../../utils/api.js';

function AddCoursePopup({ isOpen, onClose, onAddPlace }) {
    const [name, setName] = React.useState('');
    const [frequency, setFrequency] = React.useState(0);
    const [teacher, setTeacher] = React.useState(0);
    const [tools, setTools] = React.useState(false);

    function handleNameChange(e) {
        setName(e.target.value);
    }

    function handleFrequencyChange(e) {
        setFrequency(e.target.value);
    }

    function handleTeacherChange(e) {
        setTeacher(e.target.value);
    }

    function handleToolsChange(e) {
        setTools(e.target.checked);
    }


    function handleSubmit(e) {
        e.preventDefault();
        console.log('ADD GROUP', name, frequency, teacher, tools)

        api.addCourse(name, tools, frequency, teacher)
            .then((data) => {
                console.log(data)
            })
            .catch(err => console.log(err));
        setName('');
        setFrequency(0);
        setTeacher(0);
        e.target.closest('form').reset();
        onClose();
    }

    return (
        <PopupWithForm name='add-card' title='💖 Add course 💖' isOpen={isOpen} onClose={onClose} buttonText="Save" onSubmit={handleSubmit}>
            <input
                value={name || ''}
                onChange={handleNameChange}
                type="text"
                placeholder="Name"
                className="popup__text popup__text_type_title"
                required />
            <span className="title-input-error popup__error"></span>

            <input
                value={frequency || ''}
                onChange={handleFrequencyChange}
                type="number"
                placeholder="Frequency"
                className="popup__text popup__text_type_title"
                required />
            <span className="title-input-error popup__error"></span>

            <input
                value={teacher || ''}
                onChange={handleTeacherChange}
                type="text"
                placeholder="Teacher"
                className="popup__text popup__text_type_title"
                required />
            <span className="title-input-error popup__error"></span>

            <div className="checkbox-cont">
                <p className="input__subtitle">Tools:</p>
                <label className="container input-check">
                    <input
                        className="popup__table-check "
                        type="checkbox"
                        value={tools}
                        checked={tools}
                        onChange={handleToolsChange}
                    />
                    <span className="checkmark"></span>
                </label>
            </div>
        </PopupWithForm>
    );
}

export default AddCoursePopup;
