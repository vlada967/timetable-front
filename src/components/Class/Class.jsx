import React from 'react';
import EditCellPopup from '../EditCellPopup/EditCellPopup';

function Class({ theClass, className, courses, groups, rooms, teachers, slots }) {
    const [isEditCellPopupOpen, setIsEditCellPopupOpen] = React.useState(false);
    const [row, setRow] = React.useState(0);
    const [column, setColumn] = React.useState(0);
    let names = [];

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
            <h3 className="class_title">Timetable of the class {className}</h3>
            <table className="table">
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

                        {theClass[0].map((item, column) => {
                            if (item) {
                                return <td key={column} onClick={() => handleCellClick(0, column)} className="table-cell">{item.course.name} <br></br> {item.teacher.name}</td>
                            } else {
                                return <td key={column} onClick={() => handleCellClick(0, column)} className="table-cell"></td>
                            }
                        })}
                    </tr>

                    <tr className="table-row">
                        <th className="table-head">10:50</th>

                        {theClass[1].map((item, column) => {
                            if (item) {
                                return <td key={column} onClick={() => handleCellClick(1, column)} className="table-cell">{item.course.name} <br></br> {item.teacher.name}</td>
                            } else {
                                return <td key={column} onClick={() => handleCellClick(1, column)} className="table-cell"></td>
                            }
                        })}
                    </tr>

                    <tr className="table-row">
                        <th className="table-head">12:40</th>

                        {theClass[2].map((item, column) => {
                            if (item) {
                                return <td key={column} onClick={() => handleCellClick(2, column)} className="table-cell">{item.course.name} <br></br> {item.teacher.name}</td>
                            } else {
                                return <td key={column} onClick={() => handleCellClick(2, column)} className="table-cell"></td>
                            }
                        })}
                    </tr>

                    <tr className="table-row">
                        <th className="table-head">14:30</th>

                        {theClass[3].map((item, column) => {
                            if (item) {
                                return <td key={column} onClick={() => handleCellClick(3, column)} className="table-cell">{item.course.name} <br></br> {item.teacher.name}</td>
                            } else {
                                return <td key={column} onClick={() => handleCellClick(3, column)} className="table-cell"></td>
                            }
                        })}
                    </tr>

                    <tr className="table-row">
                        <th className="table-head">16:20</th>

                        {theClass[4].map((item, column) => {
                            if (item) {
                                return <td key={column} onClick={() => handleCellClick(4, column)} className="table-cell">{item.course.name} <br></br> {item.teacher.name}</td>
                            } else {
                                return <td key={column} onClick={() => handleCellClick(4, column)} className="table-cell"></td>
                            }
                        })}
                    </tr>

                    <tr className="table-row">
                        <th className="table-head">18:10</th>

                        {theClass[5].map((item, column) => {
                            if (item) {
                                return <td key={column} onClick={() => handleCellClick(5, column)} className="table-cell">{item.course.name} <br></br> {item.teacher.name}</td>
                            } else {
                                return <td key={column} onClick={() => handleCellClick(5, column)} className="table-cell"></td>
                            }
                        })}
                    </tr>

                    <tr className="table-row">
                        <th className="table-head">20:00</th>

                        {theClass[6].map((item, column) => {
                            if (item) {
                                return <td key={column} onClick={() => handleCellClick(6, column)} className="table-cell">{item.course.name} <br></br> {item.teacher.name}</td>
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
export default Class;
