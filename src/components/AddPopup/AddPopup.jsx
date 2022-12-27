import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import * as api from '../../utils/api.js';

function AddPopup({ isOpen, onClose, onAddPlace }) {
    const [name, setName] = React.useState('');
    const [capacity, setCapacity] = React.useState('');
    const [tools, setTools] = React.useState(false);
    let slots = [];

    function handleNameChange(e) {
        setName(e.target.value);
    }

    function handleCapacityChange(e) {
        setCapacity(e.target.value);
    }

    function handleToolsChange(e) {
        setTools(e.target.checked);
    }

    function arrayRemove(arr, value) {
        return arr.filter(function (el) {
            return el != value;
        });
    }

    function handleSlotsChange(e) {
        const id = parseInt(e.target.id, 10) + 1;
        if (slots.includes(id)) {
            slots = arrayRemove(slots, id);
        } else {
            slots.push(id);
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(name, capacity, tools, slots)
        api.addClass(name, capacity, tools, slots)
            .then((data) => {
                console.log(data)
            })
            .catch(err => console.log(err));
        setName('');
        setCapacity('');
        setTools(false);
        slots = [];
        e.target.closest('form').reset();
        onClose();
    }

    return (
        <PopupWithForm name='add-card' title='💖 Add class 💖' isOpen={isOpen} onClose={onClose} buttonText="Сохранить" onSubmit={handleSubmit}>
            <input
                value={name || ''}
                onChange={handleNameChange}
                type="text"
                placeholder="Number"
                className="popup__text popup__text_type_title"
                required />
            <span className="title-input-error popup__error"></span>
            <input
                value={capacity || ''}
                onChange={handleCapacityChange}
                type="number"
                placeholder="Capacity"
                className="popup__text popup__text_type_link"
                required />
            <span className="url-input-error popup__error"></span>

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

            <p className="popup__table-text">Choose time when the class is available:</p>
            <table className="popup__table">
                <tbody>
                    <tr className="popup__table-row">
                        <th className="popup__table-head"></th>
                        <th className="popup__table-head">Mon</th>
                        <th className="popup__table-head">Tue</th>
                        <th className="popup__table-head">Wed</th>
                        <th className="popup__table-head">Thu</th>
                        <th className="popup__table-head">Fri</th>
                        <th className="popup__table-head">Sat</th>
                        <th className="popup__table-head">Sun</th>
                    </tr>

                    <tr className="popup__table-row">
                        <th className="popup__table-head">9:00</th>
                        <td className="popup__table-cell">
                            <label className="container">
                                <input
                                    className="popup__table-check"
                                    type="checkbox"
                                    id={0}
                                    value={slots[0]}
                                    onChange={handleSlotsChange}
                                />
                                <span className="checkmark"></span>
                            </label>
                        </td>

                        <td className="popup__table-cell">
                            <label className="container">
                                <input
                                    className="popup__table-check"
                                    type="checkbox"
                                    id={1}
                                    value={slots[1]}
                                    onChange={handleSlotsChange}
                                />
                                <span className="checkmark"></span>
                            </label>
                        </td>

                        <td className="popup__table-cell">
                            <label className="container">
                                <input
                                    className="popup__table-check"
                                    type="checkbox"
                                    id="2"
                                    value={slots[2]}
                                    onChange={handleSlotsChange}
                                />
                                <span className="checkmark"></span>
                            </label>
                        </td>

                        <td className="popup__table-cell">
                            <label className="container">
                                <input
                                    className="popup__table-check"
                                    type="checkbox"
                                    id="3"
                                    value={slots[3]}
                                    onChange={handleSlotsChange}
                                />
                                <span className="checkmark"></span>
                            </label>
                        </td>

                        <td className="popup__table-cell">
                            <label className="container">
                                <input
                                    className="popup__table-check"
                                    type="checkbox"
                                    id="4"
                                    value={slots[4]}
                                    onChange={handleSlotsChange}
                                />
                                <span className="checkmark"></span>
                            </label>
                        </td>

                        <td className="popup__table-cell">
                            <label className="container">
                                <input
                                    className="popup__table-check"
                                    type="checkbox"
                                    id="5"
                                    value={slots[5]}
                                    onChange={handleSlotsChange}
                                />
                                <span className="checkmark"></span>
                            </label>
                        </td>

                        <td className="popup__table-cell">
                            <label className="container">
                                <input
                                    className="popup__table-check"
                                    type="checkbox"
                                    id="6"
                                    value={slots[6]}
                                    onChange={handleSlotsChange}
                                />
                                <span className="checkmark"></span>
                            </label>
                        </td>
                    </tr>

                    <tr className="popup__table-row">
                        <th className="popup__table-head">10:50</th>
                        <td className="popup__table-cell">
                            <label className="container">
                                <input
                                    className="popup__table-check"
                                    type="checkbox"
                                    id="7"
                                    value={slots[7]}
                                    onChange={handleSlotsChange}
                                />
                                <span className="checkmark"></span>
                            </label>
                        </td>

                        <td className="popup__table-cell">
                            <label className="container">
                                <input
                                    className="popup__table-check"
                                    type="checkbox"
                                    id="8"
                                    value={slots[8]}
                                    onChange={handleSlotsChange}
                                />
                                <span className="checkmark"></span>
                            </label>
                        </td>

                        <td className="popup__table-cell">
                            <label className="container">
                                <input
                                    className="popup__table-check"
                                    type="checkbox"
                                    id="9"
                                    value={slots[9]}
                                    onChange={handleSlotsChange}
                                />
                                <span className="checkmark"></span>
                            </label>
                        </td>

                        <td className="popup__table-cell">
                            <label className="container">
                                <input
                                    className="popup__table-check"
                                    type="checkbox"
                                    id="10"
                                    value={slots[10]}
                                    onChange={handleSlotsChange}
                                />
                                <span className="checkmark"></span>
                            </label>
                        </td>

                        <td className="popup__table-cell">
                            <label className="container">
                                <input
                                    className="popup__table-check"
                                    type="checkbox"
                                    id="11"
                                    value={slots[11]}
                                    onChange={handleSlotsChange}
                                />
                                <span className="checkmark"></span>
                            </label>
                        </td>

                        <td className="popup__table-cell">
                            <label className="container">
                                <input
                                    className="popup__table-check"
                                    type="checkbox"
                                    id="12"
                                    value={slots[12]}
                                    onChange={handleSlotsChange}
                                />
                                <span className="checkmark"></span>
                            </label>
                        </td>

                        <td className="popup__table-cell">
                            <label className="container">
                                <input
                                    className="popup__table-check"
                                    type="checkbox"
                                    id="13"
                                    value={slots[13]}
                                    onChange={handleSlotsChange}
                                />
                                <span className="checkmark"></span>
                            </label>
                        </td>
                    </tr>

                    <tr className="popup__table-row">
                        <th className="popup__table-head">12:40</th>
                        <td className="popup__table-cell">
                            <label className="container">
                                <input
                                    className="popup__table-check"
                                    type="checkbox"
                                    id="14"
                                    value={slots[14]}
                                    onChange={handleSlotsChange}
                                />
                                <span className="checkmark"></span>
                            </label>
                        </td>

                        <td className="popup__table-cell">
                            <label className="container">
                                <input
                                    className="popup__table-check"
                                    type="checkbox"
                                    id="15"
                                    value={slots[15]}
                                    onChange={handleSlotsChange}
                                />
                                <span className="checkmark"></span>
                            </label>
                        </td>

                        <td className="popup__table-cell">
                            <label className="container">
                                <input
                                    className="popup__table-check"
                                    type="checkbox"
                                    id="16"
                                    value={slots[16]}
                                    onChange={handleSlotsChange}
                                />
                                <span className="checkmark"></span>
                            </label>
                        </td>

                        <td className="popup__table-cell">
                            <label className="container">
                                <input
                                    className="popup__table-check"
                                    type="checkbox"
                                    id="17"
                                    value={slots[17]}
                                    onChange={handleSlotsChange}
                                />
                                <span className="checkmark"></span>
                            </label>
                        </td>

                        <td className="popup__table-cell">
                            <label className="container">
                                <input
                                    className="popup__table-check"
                                    type="checkbox"
                                    id="18"
                                    value={slots[18]}
                                    onChange={handleSlotsChange}
                                />
                                <span className="checkmark"></span>
                            </label>
                        </td>

                        <td className="popup__table-cell">
                            <label className="container">
                                <input
                                    className="popup__table-check"
                                    type="checkbox"
                                    id="19"
                                    value={slots[19]}
                                    onChange={handleSlotsChange}
                                />
                                <span className="checkmark"></span>
                            </label>
                        </td>

                        <td className="popup__table-cell">
                            <label className="container">
                                <input
                                    className="popup__table-check"
                                    type="checkbox"
                                    id="20"
                                    value={slots[20]}
                                    onChange={handleSlotsChange}
                                />
                                <span className="checkmark"></span>
                            </label>
                        </td>
                    </tr>

                    <tr className="popup__table-row">
                        <th className="popup__table-head">14:30</th>
                        <td className="popup__table-cell">
                            <label className="container">
                                <input
                                    className="popup__table-check"
                                    type="checkbox"
                                    id="21"
                                    value={slots[21]}
                                    onChange={handleSlotsChange}
                                />
                                <span className="checkmark"></span>
                            </label>
                        </td>

                        <td className="popup__table-cell">
                            <label className="container">
                                <input
                                    className="popup__table-check"
                                    type="checkbox"
                                    id="22"
                                    value={slots[22]}
                                    onChange={handleSlotsChange}
                                />
                                <span className="checkmark"></span>
                            </label>
                        </td>

                        <td className="popup__table-cell">
                            <label className="container">
                                <input
                                    className="popup__table-check"
                                    type="checkbox"
                                    id="23"
                                    value={slots[23]}
                                    onChange={handleSlotsChange}
                                />
                                <span className="checkmark"></span>
                            </label>
                        </td>

                        <td className="popup__table-cell">
                            <label className="container">
                                <input
                                    className="popup__table-check"
                                    type="checkbox"
                                    id="24"
                                    value={slots[24]}
                                    onChange={handleSlotsChange}
                                />
                                <span className="checkmark"></span>
                            </label>
                        </td>

                        <td className="popup__table-cell">
                            <label className="container">
                                <input
                                    className="popup__table-check"
                                    type="checkbox"
                                    id="25"
                                    value={slots[25]}
                                    onChange={handleSlotsChange}
                                />
                                <span className="checkmark"></span>
                            </label>
                        </td>

                        <td className="popup__table-cell">
                            <label className="container">
                                <input
                                    className="popup__table-check"
                                    type="checkbox"
                                    id="26"
                                    value={slots[26]}
                                    onChange={handleSlotsChange}
                                />
                                <span className="checkmark"></span>
                            </label>
                        </td>

                        <td className="popup__table-cell">
                            <label className="container">
                                <input
                                    className="popup__table-check"
                                    type="checkbox"
                                    id="27"
                                    value={slots[27]}
                                    onChange={handleSlotsChange}
                                />
                                <span className="checkmark"></span>
                            </label>
                        </td>
                    </tr>

                    <tr className="popup__table-row">
                        <th className="popup__table-head">16:20</th>
                        <td className="popup__table-cell">
                            <label className="container">
                                <input
                                    className="popup__table-check"
                                    type="checkbox"
                                    id="28"
                                    value={slots[28]}
                                    onChange={handleSlotsChange}
                                />
                                <span className="checkmark"></span>
                            </label>
                        </td>

                        <td className="popup__table-cell">
                            <label className="container">
                                <input
                                    className="popup__table-check"
                                    type="checkbox"
                                    id="29"
                                    value={slots[29]}
                                    onChange={handleSlotsChange}
                                />
                                <span className="checkmark"></span>
                            </label>
                        </td>

                        <td className="popup__table-cell">
                            <label className="container">
                                <input
                                    className="popup__table-check"
                                    type="checkbox"
                                    id="30"
                                    value={slots[30]}
                                    onChange={handleSlotsChange}
                                />
                                <span className="checkmark"></span>
                            </label>
                        </td>

                        <td className="popup__table-cell">
                            <label className="container">
                                <input
                                    className="popup__table-check"
                                    type="checkbox"
                                    id="31"
                                    value={slots[31]}
                                    onChange={handleSlotsChange}
                                />
                                <span className="checkmark"></span>
                            </label>
                        </td>

                        <td className="popup__table-cell">
                            <label className="container">
                                <input
                                    className="popup__table-check"
                                    type="checkbox"
                                    id="32"
                                    value={slots[32]}
                                    onChange={handleSlotsChange}
                                />
                                <span className="checkmark"></span>
                            </label>
                        </td>

                        <td className="popup__table-cell">
                            <label className="container">
                                <input
                                    className="popup__table-check"
                                    type="checkbox"
                                    id="33"
                                    value={slots[33]}
                                    onChange={handleSlotsChange}
                                />
                                <span className="checkmark"></span>
                            </label>
                        </td>

                        <td className="popup__table-cell">
                            <label className="container">
                                <input
                                    className="popup__table-check"
                                    type="checkbox"
                                    id="34"
                                    value={slots[34]}
                                    onChange={handleSlotsChange}
                                />
                                <span className="checkmark"></span>
                            </label>
                        </td>
                    </tr>

                    <tr className="popup__table-row">
                        <th className="popup__table-head">18:10</th>
                        <td className="popup__table-cell">
                            <label className="container">
                                <input
                                    className="popup__table-check"
                                    type="checkbox"
                                    id="35"
                                    value={slots[35]}
                                    onChange={handleSlotsChange}
                                />
                                <span className="checkmark"></span>
                            </label>
                        </td>

                        <td className="popup__table-cell">
                            <label className="container">
                                <input
                                    className="popup__table-check"
                                    type="checkbox"
                                    id="36"
                                    value={slots[36]}
                                    onChange={handleSlotsChange}
                                />
                                <span className="checkmark"></span>
                            </label>
                        </td>

                        <td className="popup__table-cell">
                            <label className="container">
                                <input
                                    className="popup__table-check"
                                    type="checkbox"
                                    id="37"
                                    value={slots[37]}
                                    onChange={handleSlotsChange}
                                />
                                <span className="checkmark"></span>
                            </label>
                        </td>

                        <td className="popup__table-cell">
                            <label className="container">
                                <input
                                    className="popup__table-check"
                                    type="checkbox"
                                    id="38"
                                    value={slots[38]}
                                    onChange={handleSlotsChange}
                                />
                                <span className="checkmark"></span>
                            </label>
                        </td>

                        <td className="popup__table-cell">
                            <label className="container">
                                <input
                                    className="popup__table-check"
                                    type="checkbox"
                                    id="39"
                                    value={slots[39]}
                                    onChange={handleSlotsChange}
                                />
                                <span className="checkmark"></span>
                            </label>
                        </td>

                        <td className="popup__table-cell">
                            <label className="container">
                                <input
                                    className="popup__table-check"
                                    type="checkbox"
                                    id="40"
                                    value={slots[40]}
                                    onChange={handleSlotsChange}
                                />
                                <span className="checkmark"></span>
                            </label>
                        </td>

                        <td className="popup__table-cell">
                            <label className="container">
                                <input
                                    className="popup__table-check"
                                    type="checkbox"
                                    id="41"
                                    value={slots[41]}
                                    onChange={handleSlotsChange}
                                />
                                <span className="checkmark"></span>
                            </label>
                        </td>
                    </tr>

                    <tr className="popup__table-row">
                        <th className="popup__table-head">20:00</th>
                        <td className="popup__table-cell">
                            <label className="container">
                                <input
                                    className="popup__table-check"
                                    type="checkbox"
                                    id="42"
                                    value={slots[42]}
                                    onChange={handleSlotsChange}
                                />
                                <span className="checkmark"></span>
                            </label>
                        </td>

                        <td className="popup__table-cell">
                            <label className="container">
                                <input
                                    className="popup__table-check"
                                    type="checkbox"
                                    id="43"
                                    value={slots[43]}
                                    onChange={handleSlotsChange}
                                />
                                <span className="checkmark"></span>
                            </label>
                        </td>

                        <td className="popup__table-cell">
                            <label className="container">
                                <input
                                    className="popup__table-check"
                                    type="checkbox"
                                    id="44"
                                    value={slots[44]}
                                    onChange={handleSlotsChange}
                                />
                                <span className="checkmark"></span>
                            </label>
                        </td>

                        <td className="popup__table-cell">
                            <label className="container">
                                <input
                                    className="popup__table-check"
                                    type="checkbox"
                                    id="45"
                                    value={slots[45]}
                                    onChange={handleSlotsChange}
                                />
                                <span className="checkmark"></span>
                            </label>
                        </td>

                        <td className="popup__table-cell">
                            <label className="container">
                                <input
                                    className="popup__table-check"
                                    type="checkbox"
                                    id="46"
                                    value={slots[46]}
                                    onChange={handleSlotsChange}
                                />
                                <span className="checkmark"></span>
                            </label>
                        </td>

                        <td className="popup__table-cell">
                            <label className="container">
                                <input
                                    className="popup__table-check"
                                    type="checkbox"
                                    id="47"
                                    value={slots[47]}
                                    onChange={handleSlotsChange}
                                />
                                <span className="checkmark"></span>
                            </label>
                        </td>

                        <td className="popup__table-cell">
                            <label className="container">
                                <input
                                    className="popup__table-check"
                                    type="checkbox"
                                    id="48"
                                    value={slots[48]}
                                    onChange={handleSlotsChange}
                                />
                                <span className="checkmark"></span>
                            </label>
                        </td>
                    </tr>
                </tbody>
            </table>
        </PopupWithForm>
    );
}

export default AddPopup;