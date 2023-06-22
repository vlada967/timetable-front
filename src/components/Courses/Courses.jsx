import React, { useEffect } from 'react';
import * as api from '../../utils/api.js';
import editPath from '../../images/edit.svg';
import trashPath from '../../images/trash.svg';
import AddCoursePopup from '../AddCoursePopup/AddCoursePopup';
import EditCoursePopup from '../EditCoursePopup/EditCoursePopup';

function Courses({ courses, setCourses, slots }) {
    const [isAddPopupOpen, setIsAddPopupOpen] = React.useState(false);
    const [isEditPopupOpen, setIsEditPopupOpen] = React.useState(false);
    const [theCourse, setTheCourse] = React.useState([]);
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

    function getTeacher(id) {
        api.getTeacher(id)
            .then((data) => {
                console.log('Teacher', data);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    function getGroup(id) {
        api.getGroup(id)
            .then((data) => {
                console.log('Group', data);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    function closePopup() {
        setIsAddPopupOpen(false);
        setIsEditPopupOpen(false);
    }

    function handleAddClick() {
        setIsAddPopupOpen(true);
    }

    function handleEditCourse(e) {
        courses.forEach(c => {
            if (c.id.toString() === e.target.id) {
                setTheCourse(c);
            }
        });

        setIsChecked(checked);
        setIsEditPopupOpen(true);
    }

    function handleDeleteCourse(e) {
        api.deleteCourse(e.target.id)
            .then(() => {
                setCourses((state) => state.filter(c => c.id !== e.target.id));
            })
            .catch((err) => {
                console.log(err);
            });
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
                            <th className="classes__cell">Tools</th>
                            <th className="classes__cell">Frequency</th>
                            <th className="classes__cell">Teacher</th>
                            <th className="classes__cell">Groups</th>
                        </tr>

                        {courses.map((item) => {
                            console.log('course', item)
                            return (
                                <tr className="classes__row">
                                    <td className="classes__cell">{item.name}</td>
                                    <td className="classes__cell">{item.tools ? "Has" : "No"}</td>
                                    <td className="classes__cell">{item.frequency}</td>
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
                                    <img src={editPath} alt="pencil" className="classes__img" id={item.id} onClick={handleEditCourse} />
                                    <img src={trashPath} alt="trash" className="classes__img" id={item.id} onClick={handleDeleteCourse} />
                                </tr>
                            )
                        })}

                    </tbody>
                </table>
            </div>

            <AddCoursePopup isOpen={isAddPopupOpen} onClose={closePopup} slots={slots}></AddCoursePopup>
            <EditCoursePopup isOpen={isEditPopupOpen} onClose={closePopup} theCourse={theCourse} isChecked={isChecked} availableSlots={availableSlots}></EditCoursePopup>
        </section>
    );
}

export default Courses;
