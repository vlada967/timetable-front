import React, { useEffect } from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import * as api from '../../utils/api.js';

function EditPopup({ isOpen, onClose, theClass, isChecked, availableSlots }) {
    const [name, setName] = React.useState('');
    const [capacity, setCapacity] = React.useState('');
    const [tools, setTools] = React.useState(false);
    const [slotNumbers, setSlotNumbers] = React.useState([]);
    const [slots, setSlots] = React.useState([]);
    let arr = [false, false, false, false, false, false, false, false,
        false, false, false, false, false, false, false,
        false, false, false, false, false, false, false,
        false, false, false, false, false, false, false,
        false, false, false, false, false, false, false,
        false, false, false, false, false, false, false,
        false, false, false, false, false, false, false];

    useEffect(() => {
        setName(theClass.name);
        setCapacity(theClass.capacity);
        setTools(theClass.tools);
        // setSlots(availableSlots);
        setSlotNumbers(availableSlots);
    }, [isOpen]);

    useEffect(() => {
        slotNumbers.forEach(i => {
            arr[i] = true;
        })
        setSlots(arr);
    }, [slotNumbers])

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
            return el !== value;
        });
    }

    function handleSlotsChange(e) {
        let id = parseInt(e.target.id)
        let testSlots = slots;
        testSlots[id] = !testSlots[id];
        setSlots(testSlots);
    }

    function handleSubmit(e) {
        e.preventDefault();

        let newSlots = [];

        for (let i = 0; i < 49; i++) {
            if (slots[i]) {
                newSlots.push(i);
            }
        }

        console.log('newSlots', newSlots)

        api.editClass(theClass.id, name, capacity, tools, newSlots)
            .then(() => {
            })
            .catch((err) => {
                console.log(err);
            });
        onClose();
    }

    return (
        <PopupWithForm name='add-card' title='💖 Edit the class 💖' isOpen={isOpen} onClose={onClose} buttonText="Сохранить" onSubmit={handleSubmit}>
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
                                    id={1}
                                    value={slots[1]}
                                    defaultChecked={slots[1]}
                                    onClick={handleSlotsChange}
                                />
                                <span className="checkmark"></span>
                            </label>
                        </td>

                        <td className="popup__table-cell">
                            <label className="container">
                                <input
                                    className="popup__table-check"
                                    type="checkbox"
                                    id={2}
                                    value={slots[2]}
                                    defaultChecked={slots[2]}
                                    onClick={handleSlotsChange}
                                />
                                <span className="checkmark"></span>
                            </label>
                        </td>

                        <td className="popup__table-cell">
                            <label className="container">
                                <input
                                    className="popup__table-check"
                                    type="checkbox"
                                    id={3}
                                    value={slots[3]}
                                    defaultChecked={slots[3]}
                                    onClick={handleSlotsChange}
                                />
                                <span className="checkmark"></span>
                            </label>
                        </td>

                        <td className="popup__table-cell">
                            <label className="container">
                                <input
                                    className="popup__table-check"
                                    type="checkbox"
                                    id={4}
                                    value={slots[4]}
                                    defaultChecked={slots[4]}
                                    onClick={handleSlotsChange}
                                />
                                <span className="checkmark"></span>
                            </label>
                        </td>

                        <td className="popup__table-cell">
                            <label className="container">
                                <input
                                    className="popup__table-check"
                                    type="checkbox"
                                    id={5}
                                    value={slots[5]}
                                    defaultChecked={slots[5]}
                                    onClick={handleSlotsChange}
                                />
                                <span className="checkmark"></span>
                            </label>
                        </td>

                        <td className="popup__table-cell">
                            <label className="container">
                                <input
                                    className="popup__table-check"
                                    type="checkbox"
                                    id={6}
                                    value={slots[6]}
                                    defaultChecked={slots[6]}
                                    onClick={handleSlotsChange}
                                />
                                <span className="checkmark"></span>
                            </label>
                        </td>

                        <td className="popup__table-cell">
                            <label className="container">
                                <input
                                    className="popup__table-check"
                                    type="checkbox"
                                    id={7}
                                    value={slots[7]}
                                    defaultChecked={slots[7]}
                                    onClick={handleSlotsChange}
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
                                    id={8}
                                    value={slots[8]}
                                    defaultChecked={slots[8]}
                                    onClick={handleSlotsChange}
                                />
                                <span className="checkmark"></span>
                            </label>
                        </td>

                        <td className="popup__table-cell">
                            <label className="container">
                                <input
                                    className="popup__table-check"
                                    type="checkbox"
                                    id={9}
                                    value={slots[9]}
                                    defaultChecked={slots[9]}
                                    onClick={handleSlotsChange}
                                />
                                <span className="checkmark"></span>
                            </label>
                        </td>

                        <td className="popup__table-cell">
                            <label className="container">
                                <input
                                    className="popup__table-check"
                                    type="checkbox"
                                    id={10}
                                    value={slots[10]}
                                    defaultChecked={slots[10]}
                                    onClick={handleSlotsChange}
                                />
                                <span className="checkmark"></span>
                            </label>
                        </td>

                        <td className="popup__table-cell">
                            <label className="container">
                                <input
                                    className="popup__table-check"
                                    type="checkbox"
                                    id={11}
                                    value={slots[11]}
                                    defaultChecked={slots[11]}
                                    onClick={handleSlotsChange}
                                />
                                <span className="checkmark"></span>
                            </label>
                        </td>

                        <td className="popup__table-cell">
                            <label className="container">
                                <input
                                    className="popup__table-check"
                                    type="checkbox"
                                    id={12}
                                    value={slots[12]}
                                    defaultChecked={slots[12]}
                                    onClick={handleSlotsChange}
                                />
                                <span className="checkmark"></span>
                            </label>
                        </td>

                        <td className="popup__table-cell">
                            <label className="container">
                                <input
                                    className="popup__table-check"
                                    type="checkbox"
                                    id={13}
                                    value={slots[13]}
                                    defaultChecked={slots[13]}
                                    onClick={handleSlotsChange}
                                />
                                <span className="checkmark"></span>
                            </label>
                        </td>

                        <td className="popup__table-cell">
                            <label className="container">
                                <input
                                    className="popup__table-check"
                                    type="checkbox"
                                    id={14}
                                    value={slots[14]}
                                    defaultChecked={slots[14]}
                                    onClick={handleSlotsChange}
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
                                    id={15}
                                    value={slots[15]}
                                    defaultChecked={slots[15]}
                                    onClick={handleSlotsChange}
                                />
                                <span className="checkmark"></span>
                            </label>
                        </td>

                        <td className="popup__table-cell">
                            <label className="container">
                                <input
                                    className="popup__table-check"
                                    type="checkbox"
                                    id={16}
                                    value={slots[16]}
                                    defaultChecked={slots[16]}
                                    onClick={handleSlotsChange}
                                />
                                <span className="checkmark"></span>
                            </label>
                        </td>

                        <td className="popup__table-cell">
                            <label className="container">
                                <input
                                    className="popup__table-check"
                                    type="checkbox"
                                    id={17}
                                    value={slots[17]}
                                    defaultChecked={slots[17]}
                                    onClick={handleSlotsChange}
                                />
                                <span className="checkmark"></span>
                            </label>
                        </td>

                        <td className="popup__table-cell">
                            <label className="container">
                                <input
                                    className="popup__table-check"
                                    type="checkbox"
                                    id={18}
                                    value={slots[18]}
                                    defaultChecked={slots[18]}
                                    onClick={handleSlotsChange}
                                />
                                <span className="checkmark"></span>
                            </label>
                        </td>

                        <td className="popup__table-cell">
                            <label className="container">
                                <input
                                    className="popup__table-check"
                                    type="checkbox"
                                    id={19}
                                    value={slots[19]}
                                    defaultChecked={slots[19]}
                                    onClick={handleSlotsChange}
                                />
                                <span className="checkmark"></span>
                            </label>
                        </td>

                        <td className="popup__table-cell">
                            <label className="container">
                                <input
                                    className="popup__table-check"
                                    type="checkbox"
                                    id={20}
                                    value={slots[20]}
                                    defaultChecked={slots[20]}
                                    onClick={handleSlotsChange}
                                />
                                <span className="checkmark"></span>
                            </label>
                        </td>

                        <td className="popup__table-cell">
                            <label className="container">
                                <input
                                    className="popup__table-check"
                                    type="checkbox"
                                    id={21}
                                    value={slots[21]}
                                    defaultChecked={slots[21]}
                                    onClick={handleSlotsChange}
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
                                    id={22}
                                    value={slots[22]}
                                    defaultChecked={slots[22]}
                                    onClick={handleSlotsChange}
                                />
                                <span className="checkmark"></span>
                            </label>
                        </td>

                        <td className="popup__table-cell">
                            <label className="container">
                                <input
                                    className="popup__table-check"
                                    type="checkbox"
                                    id={23}
                                    value={slots[23]}
                                    defaultChecked={slots[23]}
                                    onClick={handleSlotsChange}
                                />
                                <span className="checkmark"></span>
                            </label>
                        </td>

                        <td className="popup__table-cell">
                            <label className="container">
                                <input
                                    className="popup__table-check"
                                    type="checkbox"
                                    id={24}
                                    value={slots[24]}
                                    defaultChecked={slots[24]}
                                    onClick={handleSlotsChange}
                                />
                                <span className="checkmark"></span>
                            </label>
                        </td>

                        <td className="popup__table-cell">
                            <label className="container">
                                <input
                                    className="popup__table-check"
                                    type="checkbox"
                                    id={25}
                                    value={slots[25]}
                                    defaultChecked={slots[25]}
                                    onClick={handleSlotsChange}
                                />
                                <span className="checkmark"></span>
                            </label>
                        </td>

                        <td className="popup__table-cell">
                            <label className="container">
                                <input
                                    className="popup__table-check"
                                    type="checkbox"
                                    id={26}
                                    value={slots[26]}
                                    defaultChecked={slots[26]}
                                    onClick={handleSlotsChange}
                                />
                                <span className="checkmark"></span>
                            </label>
                        </td>

                        <td className="popup__table-cell">
                            <label className="container">
                                <input
                                    className="popup__table-check"
                                    type="checkbox"
                                    id={27}
                                    value={slots[27]}
                                    defaultChecked={slots[27]}
                                    onClick={handleSlotsChange}
                                />
                                <span className="checkmark"></span>
                            </label>
                        </td>

                        <td className="popup__table-cell">
                            <label className="container">
                                <input
                                    className="popup__table-check"
                                    type="checkbox"
                                    id={28}
                                    value={slots[28]}
                                    defaultChecked={slots[28]}
                                    onClick={handleSlotsChange}
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
                                    id={29}
                                    value={slots[29]}
                                    defaultChecked={slots[29]}
                                    onClick={handleSlotsChange}
                                />
                                <span className="checkmark"></span>
                            </label>
                        </td>

                        <td className="popup__table-cell">
                            <label className="container">
                                <input
                                    className="popup__table-check"
                                    type="checkbox"
                                    id={30}
                                    value={slots[30]}
                                    defaultChecked={slots[30]}
                                    onClick={handleSlotsChange}
                                />
                                <span className="checkmark"></span>
                            </label>
                        </td>

                        <td className="popup__table-cell">
                            <label className="container">
                                <input
                                    className="popup__table-check"
                                    type="checkbox"
                                    id={31}
                                    value={slots[31]}
                                    defaultChecked={slots[31]}
                                    onClick={handleSlotsChange}
                                />
                                <span className="checkmark"></span>
                            </label>
                        </td>

                        <td className="popup__table-cell">
                            <label className="container">
                                <input
                                    className="popup__table-check"
                                    type="checkbox"
                                    id={32}
                                    value={slots[32]}
                                    defaultChecked={slots[32]}
                                    onClick={handleSlotsChange}
                                />
                                <span className="checkmark"></span>
                            </label>
                        </td>

                        <td className="popup__table-cell">
                            <label className="container">
                                <input
                                    className="popup__table-check"
                                    type="checkbox"
                                    id={33}
                                    value={slots[33]}
                                    defaultChecked={slots[33]}
                                    onClick={handleSlotsChange}
                                />
                                <span className="checkmark"></span>
                            </label>
                        </td>

                        <td className="popup__table-cell">
                            <label className="container">
                                <input
                                    className="popup__table-check"
                                    type="checkbox"
                                    id={34}
                                    value={slots[34]}
                                    defaultChecked={slots[34]}
                                    onClick={handleSlotsChange}
                                />
                                <span className="checkmark"></span>
                            </label>
                        </td>

                        <td className="popup__table-cell">
                            <label className="container">
                                <input
                                    className="popup__table-check"
                                    type="checkbox"
                                    id={35}
                                    value={slots[35]}
                                    defaultChecked={slots[35]}
                                    onClick={handleSlotsChange}
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
                                    id={36}
                                    value={slots[36]}
                                    defaultChecked={slots[36]}
                                    onClick={handleSlotsChange}
                                />
                                <span className="checkmark"></span>
                            </label>
                        </td>

                        <td className="popup__table-cell">
                            <label className="container">
                                <input
                                    className="popup__table-check"
                                    type="checkbox"
                                    id={37}
                                    value={slots[37]}
                                    defaultChecked={slots[37]}
                                    onClick={handleSlotsChange}
                                />
                                <span className="checkmark"></span>
                            </label>
                        </td>

                        <td className="popup__table-cell">
                            <label className="container">
                                <input
                                    className="popup__table-check"
                                    type="checkbox"
                                    id={38}
                                    value={slots[38]}
                                    defaultChecked={slots[38]}
                                    onClick={handleSlotsChange}
                                />
                                <span className="checkmark"></span>
                            </label>
                        </td>

                        <td className="popup__table-cell">
                            <label className="container">
                                <input
                                    className="popup__table-check"
                                    type="checkbox"
                                    id={39}
                                    value={slots[39]}
                                    defaultChecked={slots[39]}
                                    onClick={handleSlotsChange}
                                />
                                <span className="checkmark"></span>
                            </label>
                        </td>

                        <td className="popup__table-cell">
                            <label className="container">
                                <input
                                    className="popup__table-check"
                                    type="checkbox"
                                    id={40}
                                    value={slots[40]}
                                    defaultChecked={slots[40]}
                                    onClick={handleSlotsChange}
                                />
                                <span className="checkmark"></span>
                            </label>
                        </td>

                        <td className="popup__table-cell">
                            <label className="container">
                                <input
                                    className="popup__table-check"
                                    type="checkbox"
                                    id={41}
                                    value={slots[41]}
                                    defaultChecked={slots[41]}
                                    onClick={handleSlotsChange}
                                />
                                <span className="checkmark"></span>
                            </label>
                        </td>

                        <td className="popup__table-cell">
                            <label className="container">
                                <input
                                    className="popup__table-check"
                                    type="checkbox"
                                    id={42}
                                    value={slots[42]}
                                    defaultChecked={slots[42]}
                                    onClick={handleSlotsChange}
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
                                    id={43}
                                    value={slots[43]}
                                    defaultChecked={slots[43]}
                                    onClick={handleSlotsChange}
                                />
                                <span className="checkmark"></span>
                            </label>
                        </td>

                        <td className="popup__table-cell">
                            <label className="container">
                                <input
                                    className="popup__table-check"
                                    type="checkbox"
                                    id={44}
                                    value={slots[44]}
                                    defaultChecked={slots[44]}
                                    onClick={handleSlotsChange}
                                />
                                <span className="checkmark"></span>
                            </label>
                        </td>

                        <td className="popup__table-cell">
                            <label className="container">
                                <input
                                    className="popup__table-check"
                                    type="checkbox"
                                    id={45}
                                    value={slots[45]}
                                    defaultChecked={slots[45]}
                                    onClick={handleSlotsChange}
                                />
                                <span className="checkmark"></span>
                            </label>
                        </td>

                        <td className="popup__table-cell">
                            <label className="container">
                                <input
                                    className="popup__table-check"
                                    type="checkbox"
                                    id={46}
                                    value={slots[46]}
                                    defaultChecked={slots[46]}
                                    onClick={handleSlotsChange}
                                />
                                <span className="checkmark"></span>
                            </label>
                        </td>

                        <td className="popup__table-cell">
                            <label className="container">
                                <input
                                    className="popup__table-check"
                                    type="checkbox"
                                    id={47}
                                    value={slots[47]}
                                    defaultChecked={slots[47]}
                                    onClick={handleSlotsChange}
                                />
                                <span className="checkmark"></span>
                            </label>
                        </td>

                        <td className="popup__table-cell">
                            <label className="container">
                                <input
                                    className="popup__table-check"
                                    type="checkbox"
                                    id={48}
                                    value={slots[48]}
                                    defaultChecked={slots[48]}
                                    onClick={handleSlotsChange}
                                />
                                <span className="checkmark"></span>
                            </label>
                        </td>

                        <td className="popup__table-cell">
                            <label className="container">
                                <input
                                    className="popup__table-check"
                                    type="checkbox"
                                    id={49}
                                    value={slots[49]}
                                    defaultChecked={slots[49]}
                                    onClick={handleSlotsChange}
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

export default EditPopup;