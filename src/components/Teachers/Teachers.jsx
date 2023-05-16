import React, { useEffect } from 'react';
import * as api from '../../utils/api.js';
import editPath from '../../images/edit.svg';
import trashPath from '../../images/trash.svg';
import AddTeacherPopup from '../AddTeacherPopup/AddTeacherPopup';
import EditTeacherPopup from '../EditTeacherPopup/EditTeacherPopup';
import EditPopup from '../EditPopup/EditPopup';

function Teachers({ teachers, setTeachers, slots }) {
    const [isAddPopupOpen, setIsAddPopupOpen] = React.useState(false);
    const [isEditPopupOpen, setIsEditPopupOpen] = React.useState(false);
    const [theTeacher, setTheTeacher] = React.useState([]);
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
            case 124:
                return "OS ";
            case 126:
                return "Java ";
            case 132:
                return "PAC ";
        }
    }

    function closePopup() {
        setIsAddPopupOpen(false);
        setIsEditPopupOpen(false);
    }

    function handleAddClick() {
        setIsAddPopupOpen(true);
    }

    function handleEditTeacher(e) {
        teachers.forEach(c => {
            if (c.id.toString() === e.target.id) {
                setTheTeacher(c);
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

    function handleDeleteTeacher(e) {
        api.deleteTeacher(e.target.id)
            .then(() => {
                setTeachers((state) => state.filter(c => c.id !== e.target.id));
            })
            .catch((err) => {
                console.log(err);
            });
    }

    return (
        <section className="classes">
            <div className="classes__cont">
                <h2 className="classes__title">💖 Teachers 💖</h2>
                <button type="button" onClick={() => handleAddClick()} className="classes__add">Add</button>
            </div>

            <div className="classes__cont">
                <table className="classes__table">
                    <tbody className="classes__table-body">
                        <tr className="classes__row">
                            <th className="classes__cell">Name</th>
                            {/* <th className="classes__cell">Quantity</th> */}
                            <th className="classes__cell">Courses</th>
                            <th className="classes__cell">Available time</th>
                        </tr>

                        {teachers.map((item) => {
                            console.log('teacher', item)
                            return (
                                <tr className="classes__row">
                                    <td className="classes__cell">{item.name}</td>
                                    {/* <td className="classes__cell">{item.quantity}</td> */}
                                    <td className="classes__cell">{item.courses.map(id => getCourse(id))}</td>
                                    <td className="classes__cell">{item.availableSlots.map((slotId) => {
                                        let slot = slots.find(slot => slot.id === slotId)
                                        return (
                                            <tr className="classes__row">
                                                <td className="classes__cell">{getDay(slot.day)}</td>
                                                <td className="classes__cell">{getTime(slot.timeStart)}</td>
                                            </tr>
                                        )
                                    })}</td>
                                    <img src={editPath} alt="pencil" className="classes__img" id={item.id} onClick={handleEditTeacher} />
                                    <img src={trashPath} alt="trash" className="classes__img" id={item.id} onClick={handleDeleteTeacher} />
                                </tr>
                            )
                        })}

                    </tbody>
                </table>
            </div>

            <AddTeacherPopup isOpen={isAddPopupOpen} onClose={closePopup} slots={slots}></AddTeacherPopup>
            <EditTeacherPopup isOpen={isEditPopupOpen} onClose={closePopup} theTeacher={theTeacher} isChecked={isChecked} availableSlots={availableSlots}></EditTeacherPopup>
        </section>
    );
}

export default Teachers;
