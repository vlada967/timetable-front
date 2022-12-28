import React, { useEffect } from 'react';
import * as api from '../../utils/api.js';
import editPath from '../../images/edit.svg';
import trashPath from '../../images/trash.svg';
import AddGroupPopup from '../AddGroupPopup/AddGroupPopup';
import EditPopup from '../EditPopup/EditPopup';

function Courses({ courses, slots }) {
    const [isAddPopupOpen, setIsAddPopupOpen] = React.useState(false);
    const [isEditPopupOpen, setIsEditPopupOpen] = React.useState(false);
    const [theClass, setTheClass] = React.useState([]);
    const [availableSlots, setAvailableSlots] = React.useState([]);
    const [isChecked, setIsChecked] = React.useState([false, false, false, false, false, false, false,
        false, false, false, false, false, false, false,
        false, false, false, false, false, false, false,
        false, false, false, false, false, false, false,
        false, false, false, false, false, false, false,
        false, false, false, false, false, false, false,
        false, false, false, false, false, false, false]);
    let checked = [];
    let available = [];

    function getDay(id) {
        switch (id) {
            case 0:
                return "Mon";
            case 1:
                return "Tue";
            case 2:
                return "Wed";
            case 3:
                return "Thu";
            case 4:
                return "Fri";
            case 5:
                return "Sat";
            case 6:
                return "Sun";
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

    function getCourse(id) {
        switch (id) {
            case 52:
                return "Law ";
            case 53:
                return "History ";
            case 3:
                return "PAC ";
        }
    }

    function getTeacher(id) {
        switch (id) {
            case 31:
                return "Ivanov ";
            case 32:
                return "Gatilov ";
            case 33:
                return "Sidorov ";
        }
    }

    function getGroup(id) {
        switch (id) {
            case 71:
                return "20201 ";
            case 72:
                return "20202 ";
            case 73:
                return "20203 ";
            case 75:
                return "20204 ";
            case 76:
                return "20205 ";
            case 77:
                return "20206 ";
        }
    }

    function closePopup() {
        setIsAddPopupOpen(false);
        setIsEditPopupOpen(false);
    }

    function handleAddClick() {
        setIsAddPopupOpen(true);
    }

    function handleEditGroup(e) {
        courses.forEach(c => {
            if (c.id.toString() === e.target.id) {
                setTheClass(c);
                available = c.availableSlots;
                setAvailableSlots(available);
            }
        });

        for (let i = 1; i <= 49; i++) {
            if (available.includes(i)) {
                checked[i] = true;
            } else {
                checked[i] = false;
            }
        }
        setIsChecked(checked);
        setIsEditPopupOpen(true);
    }

    function handleDeleteGroup(e) {
        // api.deleteGroup(e.target.id)
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
                <h2 className="classes__title">💖 Courses 💖</h2>
                <button type="button" onClick={() => handleAddClick()} className="classes__add">Add</button>
            </div>

            <div className="classes__cont">
                <table className="classes__table">
                    <tbody className="classes__table-body">
                        <tr className="classes__row">
                            <th className="classes__cell">Name</th>
                            <th className="classes__cell">Teacher</th>
                            <th className="classes__cell">Groups</th>
                        </tr>

                        {courses.map((item) => {
                            console.log('course', item)
                            return (
                                <tr className="classes__row">
                                    <td className="classes__cell">{item.name}</td>
                                    <td className="classes__cell">{getTeacher(item.teacher)}</td>
                                    <td className="classes__cell">{item.groups.map(id => getGroup(id))}</td>
                                    {/* <td className="classes__cell">{item.availableSlots.map((slotId) => {
                                        let slot = slots.find(slot => slot.id === slotId)
                                        return (
                                            <tr className="classes__row">
                                                <td className="classes__cell">{getDay(slot.day)}</td>
                                                <td className="classes__cell">{getTime(slot.timeStart)}</td>
                                            </tr>
                                        )
                                    })}</td> */}
                                    <img src={editPath} alt="pencil" className="classes__img" id={item.id} onClick={handleEditGroup} />
                                    <img src={trashPath} alt="trash" className="classes__img" id={item.id} onClick={handleDeleteGroup} />
                                </tr>
                            )
                        })}

                    </tbody>
                </table>
            </div>

            <AddGroupPopup isOpen={isAddPopupOpen} onClose={closePopup} slots={slots}></AddGroupPopup>
            <EditPopup isOpen={isEditPopupOpen} onClose={closePopup} theClass={theClass} isChecked={isChecked} availableSlots={availableSlots}></EditPopup>
        </section>
    );
}

export default Courses;
