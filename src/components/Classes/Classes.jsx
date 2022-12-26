import React, { useEffect } from 'react';
import * as api from '../../utils/api.js';
import editPath from '../../images/edit.svg';
import trashPath from '../../images/trash.svg';
import AddPopup from '../AddPopup/AddPopup';
import EditPopup from '../EditPopup/EditPopup';

function Classes({ classes, slots }) {
    const [isAddPopupOpen, setIsAddPopupOpen] = React.useState(false);
    const [isEditPopupOpen, setIsEditPopupOpen] = React.useState(false);
    const [theClass, setTheClass] = React.useState([]);

    function getDay(id) {
        switch (id) {
            case 0:
                return "Пн";
            case 1:
                return "Вт";
            case 2:
                return "Ср";
            case 3:
                return "Чт";
            case 4:
                return "Пн";
            case 5:
                return "Сб";
            case 6:
                return "Вс";
        }
    }

    function getTime(time) {
        switch (time) {
            case 540:
                return "9:00";
            case 650:
                return "10:50";
            case 760:
                return "12:40";
            case 870:
                return "14:30";
            case 980:
                return "16:20";
            case 1090:
                return "18:10";
            case 1200:
                return "20:00";
        }
    }

    function closePopup() {
        setIsAddPopupOpen(false);
        setIsEditPopupOpen(false);
    }

    function handleAddClick() {
        setIsAddPopupOpen(true);
    }

    function handleEditClass(e) {
        classes.forEach(c => {
            if (c.id.toString() === e.target.id) {
                setTheClass(c);
            }
        });
        setIsEditPopupOpen(true);
    }

    function handleDeleteClass(e) {
        // api.deleteClass(e.target.id)
        //     .then(() => {
        //         setClasses((state) => state.filter(c => c.id !== e.target.id));
        //     })
        //     .catch((err) => {
        //         console.log(err);
        //     });
    }

    return (
        <section className="classes">
            <div className="classes__cont">
                <h2 className="classes__title">💖 Аудитории 💖</h2>
                <button type="button" onClick={() => handleAddClick()} className="classes__add">Добавить</button>
            </div>

            <div className="classes__cont">
                <table className="classes__table">
                    <tbody className="classes__table-body">
                        <tr className="classes__row">
                            <th className="classes__cell">Номер аудитории</th>
                            <th className="classes__cell">Вместимость</th>
                            <th className="classes__cell">Инструменты</th>
                            <th className="classes__cell">Свободное время</th>
                        </tr>

                        {classes.map((item) => {
                            return (
                                <tr className="classes__row">
                                    <td className="classes__cell">{item.name}</td>
                                    <td className="classes__cell">{item.capacity}</td>
                                    <td className="classes__cell">{item.tools ? "Есть" : "Нет"}</td>
                                    <td className="classes__cell">{item.availableSlots.map((slotId) => {
                                        let slot = slots.find(slot => slot.id === slotId)
                                        return (
                                            <tr className="classes__row">
                                                <td className="classes__cell">{getDay(slot.day)}</td>
                                                <td className="classes__cell">{getTime(slot.timeStart)}</td>
                                            </tr>
                                        )
                                    })}</td>
                                    <img src={editPath} alt="pencil" className="classes__img" id={item.id} onClick={handleEditClass} />
                                    <img src={trashPath} alt="trash" className="classes__img" id={item.id} onClick={handleDeleteClass} />
                                </tr>
                            )
                        })}

                    </tbody>
                </table>
            </div>

            <AddPopup isOpen={isAddPopupOpen} onClose={closePopup} ></AddPopup>
            <EditPopup isOpen={isEditPopupOpen} onClose={closePopup} theClass={theClass}></EditPopup>
        </section>
    );
}

export default Classes;