import React from 'react';
import EditCellPopup from '../EditCellPopup/EditCellPopup';

function Teacher({ theTeacher, teacherName, courses, groups, rooms, teachers, slots }) {
    const [isEditCellPopupOpen, setIsEditCellPopupOpen] = React.useState(false);
    const [row, setRow] = React.useState(0);
    const [column, setColumn] = React.useState(0);
    let names = [];

    console.log('theTeacher', theTeacher)

    let ws = new WebSocket('ws://127.0.0.1:8080/api/v1/socket')

    ws.onmessage = function (evt) { onMessage(evt); };

    function onMessage(evt) {
        console.log('message')
        alert(evt.data);
        return evt.data;
    }

    const handleCellClick = (row, column) => {
        setRow(row);
        setColumn(column);
        setIsEditCellPopupOpen(true);
    };

    function closePopup() {
        setIsEditCellPopupOpen(false);
    }

    return (
        <section className="class">
            <h3 className="class_title">Timetable of teacher {teacherName}</h3>
            <div id="tableroot">

            </div>
            <table className="table" >
                <tbody>
                    <tr className="table-row">
                        <th className="table-head"></th>
                        <th className="table-head">Mon</th>
                        <th className="table-head">Tue</th>
                        <th className="table-head">Wed</th>
                        <th className="table-head">Thu</th>
                        <th className="table-head">Fri</th>
                        <th className="table-head">Sat</th>
                        <th className="table-head">Sun</th>
                    </tr>

                    <tr className="table-row">
                        <th className="table-head">9:00</th>

                        {theTeacher[0].map((item, column) => {
                            if (item) {
                                names = [];
                                item.groups.forEach((group) => {
                                    if (!names.includes(group.name)) {
                                        names.push(group.name)
                                        names.push(" ")
                                    }
                                })
                                return <td key={column} onClick={() => handleCellClick(0, column)} className="table-cell">{item.course.name} <br></br> {names} <br></br>  {item.room.name}</td>
                            } else {
                                return <td key={column} onClick={() => handleCellClick(0, column)} className="table-cell"></td>
                            }
                        })}
                    </tr>

                    <tr className="table-row">
                        <th className="table-head">10:50</th>

                        {theTeacher[1].map((item, column) => {
                            if (item) {
                                names = [];
                                item.groups.forEach((group) => {
                                    names.push(group.name)
                                    names.push(" ")
                                })
                                return <td key={column} onClick={() => handleCellClick(1, column)} className="table-cell">{item.course.name} <br></br> {names} <br></br>  {item.room.name}</td>
                            } else {
                                return <td key={column} onClick={() => handleCellClick(1, column)} className="table-cell"></td>
                            }
                        })}
                    </tr>

                    <tr className="table-row">
                        <th className="table-head">12:40</th>

                        {theTeacher[2].map((item, column) => {
                            if (item) {
                                names = [];
                                item.groups.forEach((group) => {
                                    names.push(group.name)
                                    names.push(" ")
                                })
                                return <td key={column} onClick={() => handleCellClick(2, column)} className="table-cell">{item.course.name} <br></br> {names} <br></br>  {item.room.name}</td>
                            } else {
                                return <td key={column} onClick={() => handleCellClick(2, column)} className="table-cell"></td>
                            }
                        })}
                    </tr>

                    <tr className="table-row">
                        <th className="table-head">14:30</th>

                        {theTeacher[3].map((item, column) => {
                            if (item) {
                                names = [];
                                item.groups.forEach((group) => {
                                    names.push(group.name)
                                    names.push(" ")
                                })
                                return <td key={column} onClick={() => handleCellClick(3, column)} className="table-cell">{item.course.name} <br></br> {names} <br></br>  {item.room.name}</td>
                            } else {
                                return <td key={column} onClick={() => handleCellClick(3, column)} className="table-cell"></td>
                            }
                        })}
                    </tr>

                    <tr className="table-row">
                        <th className="table-head">16:20</th>

                        {theTeacher[4].map((item, column) => {
                            if (item) {
                                names = [];
                                item.groups.forEach((group) => {
                                    names.push(group.name)
                                    names.push(" ")
                                })
                                return <td key={column} onClick={() => handleCellClick(4, column)} className="table-cell">{item.course.name} <br></br> {names} <br></br>  {item.room.name}</td>
                            } else {
                                return <td key={column} onClick={() => handleCellClick(4, column)} className="table-cell"></td>
                            }
                        })}
                    </tr>

                    <tr className="table-row">
                        <th className="table-head">18:10</th>

                        {theTeacher[5].map((item, column) => {
                            if (item) {
                                names = [];
                                item.groups.forEach((group) => {
                                    names.push(group.name)
                                    names.push(" ")
                                })
                                return <td key={column} onClick={() => handleCellClick(5, column)} className="table-cell">{item.course.name} <br></br> {names} <br></br>  {item.room.name}</td>
                            } else {
                                return <td key={column} onClick={() => handleCellClick(5, column)} className="table-cell"></td>
                            }
                        })}
                    </tr>

                    <tr className="table-row">
                        <th className="table-head">20:00</th>

                        {theTeacher[6].map((item, column) => {
                            if (item) {
                                names = [];
                                item.groups.forEach((group) => {
                                    names.push(group.name)
                                    names.push(" ")
                                })
                                return <td key={column} onClick={() => handleCellClick(6, column)} className="table-cell">{item.course.name} <br></br> {names} <br></br>  {item.room.name}</td>
                            } else {
                                return <td key={column} onClick={() => handleCellClick(6, column)} className="table-cell"></td>
                            }
                        })}
                    </tr>
                </tbody>
            </table>

            <EditCellPopup isOpen={isEditCellPopupOpen} onClose={closePopup} row={row} column={column} courses={courses} groups={groups} rooms={rooms} teachers={teachers} slots={slots}></EditCellPopup>
        </section>
    )
}
export default Teacher;
