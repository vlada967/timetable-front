import React, { useEffect } from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import * as api from '../../utils/api.js';

function EditCoursePopup({ isOpen, onClose, theCourse }) {
    const [name, setName] = React.useState('');
    const [tools, setTools] = React.useState(false);
    const [frequency, setFrequency] = React.useState(0);
    const [teacher, setTeacher] = React.useState(0);

    useEffect(() => {
        setName(theCourse.name);
        setTools(theCourse.tools);
        setFrequency(theCourse.frequency);
        setTeacher(theCourse.teacher);
    }, [isOpen]);

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

        api.editCourse(theCourse.id, name, tools, frequency, teacher)
            .then(() => {
            })
            .catch((err) => {
                console.log(err);
            });
        onClose();
    }

    return (
        <PopupWithForm name='add-card' title='💖 Edit the course 💖' isOpen={isOpen} onClose={onClose} buttonText="Сохранить" onSubmit={handleSubmit}>
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
                type="number"
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

export default EditCoursePopup;