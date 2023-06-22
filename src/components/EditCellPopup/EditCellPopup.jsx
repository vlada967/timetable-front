import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import * as api from '../../utils/api.js';

function EditCellPopup({ isOpen, onClose, row, column, courses, groups, rooms, teachers, slots }) {
    const [days, setDays] = React.useState(["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]);
    const [times, setTimes] = React.useState(["9:00", "10:50", "12:40", "14:30", "16:20", "18:10", "20:00"]);
    const [timeId, setTimeId] = React.useState(0);
    const [dayId, setDayId] = React.useState(0);
    const [slotId, setSlotId] = React.useState(0);
    const [room, setRoom] = React.useState(false);
    const [roomId, setRoomId] = React.useState(0);
    const [course, setCourse] = React.useState(false);
    const [courseId, setCourseId] = React.useState(0);
    const [group, setGroup] = React.useState([false, false]);
    const [groupId, setGroupId] = React.useState([]);
    const [teacher, setTeacher] = React.useState(false);
    const [teacherId, setTeacherId] = React.useState(0);
    let testSlot = 0;

    function getDay(column) {
        switch (column) {
            case 0:
                return "Monday";
            case 1:
                return "Tuesday";
            case 2:
                return "Wednesday";
            case 3:
                return "Thursday";
            case 4:
                return "Friday";
            case 5:
                return "Saturday";
            case 6:
                return "Sunday";
        }
    }

    function getTime(row) {
        switch (row) {
            case 0:
                return "9:00";
            case 1:
                return "10:50";
            case 2:
                return "12:40";
            case 3:
                return "14:30";
            case 4:
                return "16:20";
            case 5:
                return "18:10";
            case 6:
                return "20:00";
        }
    }

    function getSlot(time) {
        switch (time) {
            case 0:
                return (540);
            case 1:
                return (650);
            case 2:
                return (760);
            case 3:
                return (870);
            case 4:
                return (980);
            case 5:
                return (1090);
            case 6:
                return (1200);
        }
    }

    function handleDayChange(e) {
        setDayId(Number(e.target.id));
    }

    function handleTimeChange(e) {
        setTimeId(getSlot(Number(e.target.id)));
    }

    function handleRoomsChange(e) {
        setRoomId(Number(e.target.id));
        setRoom(!room);
    }

    function handleCoursesChange(e) {
        setCourseId(Number(e.target.id));
        setCourse(!course);
    }

    function handleGroupsChange(e) {
        let arrId = groupId;
        arrId.push(Number(e.target.id));
        setGroupId(arrId);
        setGroup(!group);
    }

    function handleTeachersChange(e) {
        setTeacherId(Number(e.target.id));
        setTeacher(!teacher);
    }

    function handleSubmit(e) {
        e.preventDefault();
        slots.map((item) => {
            if ((item.timeStart == timeId) && (item.day == dayId)) {
                setSlotId(item.id);
                testSlot = item.id;
            }
        })

        console.log('EDIT CELL', testSlot, roomId, groupId, teacherId, courseId)

        api.editCell(testSlot, roomId, groupId, teacherId, courseId)
            .then((data) => {
                console.log(data)
            })
            .catch(err => console.log(err));

        setDayId(0);
        setTimeId(0);
        setSlotId(0);
        setRoom(false);
        setRoomId(0);
        setCourse(false);
        setCourseId(0);
        setGroup(false);
        setGroupId([]);
        setTeacher(false);
        setTeacherId(0);
        e.target.closest('form').reset();
        onClose();
    }

    return (
        <PopupWithForm name='add-card' title={`💖 Edit for ${getDay(column)}, ${getTime(row)} 💖`} isOpen={isOpen} onClose={onClose} buttonText="Save" onSubmit={handleSubmit} >

            <div className="checkbox-cont">
                <p className="input__subtitle">Day of week:</p>

                {days.map((day, i) => {
                    return <label className="container input-check">
                        <p className="input__subtitle-checkbox">{day}</p>
                        <input
                            className="popup__table-check"
                            type="checkbox"
                            id={i}
                            onChange={handleDayChange}
                        />
                        <span className="checkmark"></span>
                    </label>
                })}
            </div>

            <div className="checkbox-cont">
                <p className="input__subtitle">Time:</p>

                {times.map((time, i) => {
                    return <label className="container input-check">
                        <p className="input__subtitle-checkbox">{time}</p>
                        <input
                            className="popup__table-check"
                            type="checkbox"
                            id={i}
                            onChange={handleTimeChange}
                        />
                        <span className="checkmark"></span>
                    </label>
                })}
            </div>
            <div className="checkbox-cont">
                <p className="input__subtitle">Rooms:</p>

                {rooms.map((item) => {
                    return <label className="container input-check">
                        <p className="input__subtitle-checkbox">{item.name}</p>
                        <input
                            className="popup__table-check"
                            type="checkbox"
                            id={item.id}
                            value={room}
                            checked={room}
                            onChange={handleRoomsChange}
                        />
                        <span className="checkmark"></span>
                    </label>
                })}
            </div>

            <div className="checkbox-cont">
                <p className="input__subtitle">Courses:</p>

                {courses.map((item) => {
                    return <label className="container input-check">
                        <p className="input__subtitle-checkbox">{item.name}</p>
                        <input
                            className="popup__table-check"
                            type="checkbox"
                            id={item.id}
                            value={course}
                            checked={course}
                            onChange={handleCoursesChange}
                        />
                        <span className="checkmark"></span>
                    </label>
                })}
            </div>

            <div className="checkbox-cont">
                <p className="input__subtitle">Groups:</p>

                {groups.map((item, i) => {
                    return <label className="container input-check">
                        <p className="input__subtitle-checkbox">{item.name}</p>
                        <input
                            className="popup__table-check"
                            type="checkbox"
                            id={item.id}
                            value={group[i]}
                            checked={group[i]}
                            onChange={handleGroupsChange}
                        />
                        <span className="checkmark"></span>
                    </label>
                })}
            </div>

            <div className="checkbox-cont">
                <p className="input__subtitle">Teachers:</p>

                {teachers.map((item) => {
                    return <label className="container input-check">
                        <p className="input__subtitle-checkbox">{item.name}</p>
                        <input
                            className="popup__table-check"
                            type="checkbox"
                            id={item.id}
                            value={teacher}
                            checked={teacher}
                            onChange={handleTeachersChange}
                        />
                        <span className="checkmark"></span>
                    </label>
                })}
            </div>
        </PopupWithForm >
    );
}

export default EditCellPopup;
