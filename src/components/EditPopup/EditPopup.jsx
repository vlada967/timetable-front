import React, { useEffect } from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import * as api from '../../utils/api.js';

function EditPopup({ isOpen, onClose, theClass, isChecked, availableSlots }) {
    const [name, setName] = React.useState('');
    const [capacity, setCapacity] = React.useState('');
    const [tools, setTools] = React.useState(false);

    const [slots1, setSlots1] = React.useState(false);
    const [slots2, setSlots2] = React.useState(false);
    const [slots3, setSlots3] = React.useState(false);
    const [slots4, setSlots4] = React.useState(false);
    const [slots5, setSlots5] = React.useState(false);
    const [slots6, setSlots6] = React.useState(false);
    const [slots7, setSlots7] = React.useState(false);
    const [slots8, setSlots8] = React.useState(false);
    const [slots9, setSlots9] = React.useState(false);
    const [slots10, setSlots10] = React.useState(false);
    const [slots11, setSlots11] = React.useState(false);
    const [slots12, setSlots12] = React.useState(false);
    const [slots13, setSlots13] = React.useState(false);
    const [slots14, setSlots14] = React.useState(false);
    const [slots15, setSlots15] = React.useState(false);
    const [slots16, setSlots16] = React.useState(false);
    const [slots17, setSlots17] = React.useState(false);
    const [slots18, setSlots18] = React.useState(false);
    const [slots19, setSlots19] = React.useState(false);
    const [slots20, setSlots20] = React.useState(false);
    const [slots21, setSlots21] = React.useState(false);
    const [slots22, setSlots22] = React.useState(false);
    const [slots23, setSlots23] = React.useState(false);
    const [slots24, setSlots24] = React.useState(false);
    const [slots25, setSlots25] = React.useState(false);
    const [slots26, setSlots26] = React.useState(false);
    const [slots27, setSlots27] = React.useState(false);
    const [slots28, setSlots28] = React.useState(false);
    const [slots29, setSlots29] = React.useState(false);
    const [slots30, setSlots30] = React.useState(false);
    const [slots31, setSlots31] = React.useState(false);
    const [slots32, setSlots32] = React.useState(false);
    const [slots33, setSlots33] = React.useState(false);
    const [slots34, setSlots34] = React.useState(false);
    const [slots35, setSlots35] = React.useState(false);
    const [slots36, setSlots36] = React.useState(false);
    const [slots37, setSlots37] = React.useState(false);
    const [slots38, setSlots38] = React.useState(false);
    const [slots39, setSlots39] = React.useState(false);
    const [slots40, setSlots40] = React.useState(false);
    const [slots41, setSlots41] = React.useState(false);
    const [slots42, setSlots42] = React.useState(false);
    const [slots43, setSlots43] = React.useState(false);
    const [slots44, setSlots44] = React.useState(false);
    const [slots45, setSlots45] = React.useState(false);
    const [slots46, setSlots46] = React.useState(false);
    const [slots47, setSlots47] = React.useState(false);
    const [slots48, setSlots48] = React.useState(false);
    const [slots49, setSlots49] = React.useState(false);

    const [slots, setSlots] = React.useState([]);
    // let slots = availableSlots;

    console.log('default slots', slots)

    useEffect(() => {
        setName(theClass.name);
        setCapacity(theClass.capacity);
        setTools(theClass.tools);

        setSlots1(isChecked[1]);
        setSlots2(isChecked[2]);
        setSlots3(isChecked[3]);
        setSlots4(isChecked[4]);
        setSlots5(isChecked[5]);
        setSlots6(isChecked[6]);
        setSlots7(isChecked[7]);
        setSlots8(isChecked[8]);
        setSlots9(isChecked[9]);
        setSlots10(isChecked[10]);
        setSlots11(isChecked[11]);
        setSlots12(isChecked[12]);
        setSlots13(isChecked[13]);
        setSlots14(isChecked[14]);
        setSlots15(isChecked[15]);
        setSlots16(isChecked[16]);
        setSlots17(isChecked[17]);
        setSlots18(isChecked[18]);
        setSlots19(isChecked[19]);
        setSlots20(isChecked[20]);
        setSlots21(isChecked[21]);
        setSlots22(isChecked[22]);
        setSlots23(isChecked[23]);
        setSlots24(isChecked[24]);
        setSlots25(isChecked[25]);
        setSlots26(isChecked[26]);
        setSlots27(isChecked[27]);
        setSlots28(isChecked[28]);
        setSlots29(isChecked[29]);
        setSlots30(isChecked[30]);
        setSlots31(isChecked[31]);
        setSlots32(isChecked[32]);
        setSlots33(isChecked[33]);
        setSlots34(isChecked[34]);
        setSlots35(isChecked[35]);
        setSlots36(isChecked[36]);
        setSlots37(isChecked[37]);
        setSlots38(isChecked[38]);
        setSlots39(isChecked[39]);
        setSlots40(isChecked[40]);
        setSlots41(isChecked[41]);
        setSlots42(isChecked[42]);
        setSlots43(isChecked[43]);
        setSlots44(isChecked[44]);
        setSlots45(isChecked[45]);
        setSlots46(isChecked[46]);
        setSlots47(isChecked[47]);
        setSlots48(isChecked[48]);
        setSlots49(isChecked[49]);

        setSlots(availableSlots);
    }, [isOpen]);

    function handleNameChange(e) {
        setName(e.target.value);
    }

    function handleCapacityChange(e) {
        setCapacity(e.target.value);
    }

    function handleToolsChange(e) {
        setTools(e.target.checked);
    }

    // --------- SLOTS --------------

    function handleSlot1Change(e) {
        setSlots1(e.target.checked);
        handleSlotsChange(1);
    }

    function handleSlot2Change(e) {
        setSlots2(e.target.checked);
        handleSlotsChange(2);
    }

    function handleSlot3Change(e) {
        setSlots3(e.target.checked);
        handleSlotsChange(3);
    }

    function handleSlot4Change(e) {
        setSlots4(e.target.checked);
        handleSlotsChange(4);
    }

    function handleSlot5Change(e) {
        setSlots5(e.target.checked);
        handleSlotsChange(5);
    }

    function handleSlot6Change(e) {
        setSlots6(e.target.checked);
        handleSlotsChange(6);
    }

    function handleSlot7Change(e) {
        setSlots7(e.target.checked);
        handleSlotsChange(7);
    }

    function handleSlot8Change(e) {
        setSlots8(e.target.checked);
        handleSlotsChange(8);
    }

    function handleSlot9Change(e) {
        setSlots9(e.target.checked);
        handleSlotsChange(9);
    }

    function handleSlot10Change(e) {
        setSlots10(e.target.checked);
        handleSlotsChange(10);
    }



    function handleSlot11Change(e) {
        setSlots11(e.target.checked);
        handleSlotsChange(11);
    }

    function handleSlot12Change(e) {
        setSlots12(e.target.checked);
        handleSlotsChange(12);
    }

    function handleSlot13Change(e) {
        setSlots13(e.target.checked);
        handleSlotsChange(13);
    }

    function handleSlot14Change(e) {
        setSlots14(e.target.checked);
        handleSlotsChange(14);
    }

    function handleSlot15Change(e) {
        setSlots15(e.target.checked);
        handleSlotsChange(15);
    }

    function handleSlot16Change(e) {
        setSlots16(e.target.checked);
        handleSlotsChange(16);
    }

    function handleSlot17Change(e) {
        setSlots17(e.target.checked);
        handleSlotsChange(17);
    }

    function handleSlot18Change(e) {
        setSlots18(e.target.checked);
        handleSlotsChange(18);
    }

    function handleSlot19Change(e) {
        setSlots19(e.target.checked);
        handleSlotsChange(19);
    }

    function handleSlot20Change(e) {
        setSlots20(e.target.checked);
        handleSlotsChange(20);
    }




    function handleSlot21Change(e) {
        setSlots21(e.target.checked);
        handleSlotsChange(21);
    }

    function handleSlot22Change(e) {
        setSlots22(e.target.checked);
        handleSlotsChange(22);
    }

    function handleSlot23Change(e) {
        setSlots23(e.target.checked);
        handleSlotsChange(23);
    }

    function handleSlot24Change(e) {
        setSlots24(e.target.checked);
        handleSlotsChange(24);
    }

    function handleSlot25Change(e) {
        setSlots25(e.target.checked);
        handleSlotsChange(25);
    }

    function handleSlot26Change(e) {
        setSlots26(e.target.checked);
        handleSlotsChange(26);
    }

    function handleSlot27Change(e) {
        setSlots27(e.target.checked);
        handleSlotsChange(27);
    }

    function handleSlot28Change(e) {
        setSlots28(e.target.checked);
        handleSlotsChange(28);
    }

    function handleSlot29Change(e) {
        setSlots29(e.target.checked);
        handleSlotsChange(29);
    }

    function handleSlot30Change(e) {
        setSlots30(e.target.checked);
        handleSlotsChange(30);
    }




    function handleSlot31Change(e) {
        setSlots31(e.target.checked);
        handleSlotsChange(31);
    }

    function handleSlot32Change(e) {
        setSlots32(e.target.checked);
        handleSlotsChange(32);
    }

    function handleSlot33Change(e) {
        setSlots33(e.target.checked);
        handleSlotsChange(33);
    }

    function handleSlot34Change(e) {
        setSlots34(e.target.checked);
        handleSlotsChange(34);
    }

    function handleSlot35Change(e) {
        setSlots35(e.target.checked);
        handleSlotsChange(35);
    }

    function handleSlot36Change(e) {
        setSlots36(e.target.checked);
        handleSlotsChange(36);
    }

    function handleSlot37Change(e) {
        setSlots37(e.target.checked);
        handleSlotsChange(37);
    }

    function handleSlot38Change(e) {
        setSlots38(e.target.checked);
        handleSlotsChange(38);
    }

    function handleSlot39Change(e) {
        setSlots39(e.target.checked);
        handleSlotsChange(39);
    }

    function handleSlot40Change(e) {
        setSlots40(e.target.checked);
        handleSlotsChange(40);
    }


    function handleSlot41Change(e) {
        setSlots41(e.target.checked);
        handleSlotsChange(41);
    }

    function handleSlot42Change(e) {
        setSlots42(e.target.checked);
        handleSlotsChange(42);
    }

    function handleSlot43Change(e) {
        setSlots43(e.target.checked);
        handleSlotsChange(43);
    }

    function handleSlot44Change(e) {
        setSlots44(e.target.checked);
        handleSlotsChange(44);
    }

    function handleSlot45Change(e) {
        setSlots45(e.target.checked);
        handleSlotsChange(45);
    }

    function handleSlot46Change(e) {
        setSlots46(e.target.checked);
        handleSlotsChange(46);
    }

    function handleSlot47Change(e) {
        setSlots47(e.target.checked);
        handleSlotsChange(47);
    }

    function handleSlot48Change(e) {
        setSlots48(e.target.checked);
        handleSlotsChange(48);
    }

    function handleSlot49Change(e) {
        setSlots49(e.target.checked);
        handleSlotsChange(49);
    }



    function arrayRemove(arr, value) {
        return arr.filter(function (el) {
            return el !== value;
        });
    }

    function handleSlotsChange(id) {
        if (slots.includes(id)) {
            setSlots(arrayRemove(slots, id));
        } else {
            let testSlots = slots;
            testSlots.push(id);
            setSlots(testSlots);
        }

        console.log('changed slots', slots)
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log('edit', theClass.id, name, capacity, tools, slots)

        api.editClass(theClass.id, name, capacity, tools, slots)
            .then(() => {
            })
            .catch((err) => {
                console.log(err);
            });
        onClose();
    }

    return (
        <PopupWithForm name='add-card' title='💖 Редактировать аудиторию 💖' isOpen={isOpen} onClose={onClose} buttonText="Сохранить" onSubmit={handleSubmit}>
            <input
                value={name || ''}
                onChange={handleNameChange}
                type="text"
                placeholder="Номер комнаты"
                className="popup__text popup__text_type_title"
                required />
            <span className="title-input-error popup__error"></span>
            <input
                value={capacity || ''}
                onChange={handleCapacityChange}
                type="number"
                placeholder="Вместимость"
                className="popup__text popup__text_type_link"
                required />
            <span className="url-input-error popup__error"></span>

            <div className="checkbox-cont">
                <p className="input__subtitle">Инструменты:</p>
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

            <p className="popup__table-text">Выберите время, когда аудитория свободна:</p>
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
                                    id="1"
                                    value={slots1}
                                    checked={slots1}
                                    onChange={handleSlot1Change}
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
                                    value={slots2}
                                    checked={slots2}
                                    onChange={handleSlot2Change}
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
                                    value={slots3}
                                    checked={slots3}
                                    onChange={handleSlot3Change}
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
                                    value={slots4}
                                    checked={slots4}
                                    onChange={handleSlot4Change}
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
                                    value={slots5}
                                    checked={slots5}
                                    onChange={handleSlot5Change}
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
                                    value={slots6}
                                    checked={slots6}
                                    onChange={handleSlot6Change}
                                />
                                <span className="checkmark"></span>
                            </label>
                        </td>

                        <td className="popup__table-cell">
                            <label className="container">
                                <input
                                    className="popup__table-check"
                                    type="checkbox"
                                    id="7"
                                    value={slots7}
                                    checked={slots7}
                                    onChange={handleSlot7Change}
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
                                    id="8"
                                    value={slots8}
                                    checked={slots8}
                                    onChange={handleSlot8Change}
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
                                    value={slots9}
                                    checked={slots9}
                                    onChange={handleSlot9Change}
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
                                    value={slots10}
                                    checked={slots10}
                                    onChange={handleSlot10Change}
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
                                    value={slots11}
                                    checked={slots11}
                                    onChange={handleSlot11Change}
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
                                    value={slots12}
                                    checked={slots12}
                                    onChange={handleSlot12Change}
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
                                    value={slots13}
                                    checked={slots13}
                                    onChange={handleSlot13Change}
                                />
                                <span className="checkmark"></span>
                            </label>
                        </td>

                        <td className="popup__table-cell">
                            <label className="container">
                                <input
                                    className="popup__table-check"
                                    type="checkbox"
                                    id="14"
                                    value={slots14}
                                    checked={slots14}
                                    onChange={handleSlot14Change}
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
                                    id="15"
                                    value={slots15}
                                    checked={slots15}
                                    onChange={handleSlot15Change}
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
                                    value={slots16}
                                    checked={slots16}
                                    onChange={handleSlot16Change}
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
                                    value={slots17}
                                    checked={slots17}
                                    onChange={handleSlot17Change}
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
                                    value={slots18}
                                    checked={slots18}
                                    onChange={handleSlot18Change}
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
                                    value={slots19}
                                    checked={slots19}
                                    onChange={handleSlot19Change}
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
                                    value={slots20}
                                    checked={slots20}
                                    onChange={handleSlot20Change}
                                />
                                <span className="checkmark"></span>
                            </label>
                        </td>

                        <td className="popup__table-cell">
                            <label className="container">
                                <input
                                    className="popup__table-check"
                                    type="checkbox"
                                    id="21"
                                    value={slots21}
                                    checked={slots21}
                                    onChange={handleSlot21Change}
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
                                    id="22"
                                    value={slots22}
                                    checked={slots22}
                                    onChange={handleSlot22Change}
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
                                    value={slots23}
                                    checked={slots23}
                                    onChange={handleSlot23Change}
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
                                    value={slots24}
                                    checked={slots24}
                                    onChange={handleSlot24Change}
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
                                    value={slots25}
                                    checked={slots25}
                                    onChange={handleSlot25Change}
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
                                    value={slots26}
                                    checked={slots26}
                                    onChange={handleSlot26Change}
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
                                    value={slots27}
                                    checked={slots27}
                                    onChange={handleSlot27Change}
                                />
                                <span className="checkmark"></span>
                            </label>
                        </td>

                        <td className="popup__table-cell">
                            <label className="container">
                                <input
                                    className="popup__table-check"
                                    type="checkbox"
                                    id="28"
                                    value={slots28}
                                    checked={slots28}
                                    onChange={handleSlot28Change}
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
                                    id="29"
                                    value={slots29}
                                    checked={slots29}
                                    onChange={handleSlot29Change}
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
                                    value={slots30}
                                    checked={slots30}
                                    onChange={handleSlot30Change}
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
                                    value={slots31}
                                    checked={slots31}
                                    onChange={handleSlot31Change}
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
                                    value={slots32}
                                    checked={slots32}
                                    onChange={handleSlot32Change}
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
                                    value={slots33}
                                    checked={slots33}
                                    onChange={handleSlot33Change}
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
                                    value={slots34}
                                    checked={slots34}
                                    onChange={handleSlot34Change}
                                />
                                <span className="checkmark"></span>
                            </label>
                        </td>

                        <td className="popup__table-cell">
                            <label className="container">
                                <input
                                    className="popup__table-check"
                                    type="checkbox"
                                    id="35"
                                    value={slots35}
                                    checked={slots35}
                                    onChange={handleSlot35Change}
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
                                    id="36"
                                    value={slots36}
                                    checked={slots36}
                                    onChange={handleSlot36Change}
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
                                    value={slots37}
                                    checked={slots37}
                                    onChange={handleSlot37Change}
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
                                    value={slots38}
                                    checked={slots38}
                                    onChange={handleSlot38Change}
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
                                    value={slots39}
                                    checked={slots39}
                                    onChange={handleSlot39Change}
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
                                    value={slots40}
                                    checked={slots40}
                                    onChange={handleSlot40Change}
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
                                    value={slots41}
                                    checked={slots41}
                                    onChange={handleSlot41Change}
                                />
                                <span className="checkmark"></span>
                            </label>
                        </td>

                        <td className="popup__table-cell">
                            <label className="container">
                                <input
                                    className="popup__table-check"
                                    type="checkbox"
                                    id="42"
                                    value={slots42}
                                    checked={slots42}
                                    onChange={handleSlot42Change}
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
                                    id="43"
                                    value={slots43}
                                    checked={slots43}
                                    onChange={handleSlot43Change}
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
                                    value={slots44}
                                    checked={slots44}
                                    onChange={handleSlot44Change}
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
                                    value={slots45}
                                    checked={slots45}
                                    onChange={handleSlot45Change}
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
                                    value={slots46}
                                    checked={slots46}
                                    onChange={handleSlot46Change}
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
                                    value={slots47}
                                    checked={slots47}
                                    onChange={handleSlot47Change}
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
                                    value={slots48}
                                    checked={slots48}
                                    onChange={handleSlot48Change}
                                />
                                <span className="checkmark"></span>
                            </label>
                        </td>

                        <td className="popup__table-cell">
                            <label className="container">
                                <input
                                    className="popup__table-check"
                                    type="checkbox"
                                    id="49"
                                    value={slots49}
                                    checked={slots49}
                                    onChange={handleSlot49Change}
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