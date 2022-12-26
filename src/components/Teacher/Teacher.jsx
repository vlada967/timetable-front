function Teacher({ theTeacher }) {
    function checkSlot(cellId) {
        if (!theTeacher.availableSlots.includes(cellId)) {
            return "??";
        }
        return "";
    }

    return (
        <section className="class">
            <h3 className="class_title">Расписание преподавателя {theTeacher.name}</h3>
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

                        <td className="table-cell">{checkSlot(1)}</td>
                        <td className="table-cell">{checkSlot(2)}</td>
                        <td className="table-cell">{checkSlot(3)}</td>
                        <td className="table-cell">{checkSlot(4)}</td>
                        <td className="table-cell">{checkSlot(5)}</td>
                        <td className="table-cell">{checkSlot(6)}</td>
                        <td className="table-cell">{checkSlot(7)}</td>
                    </tr>

                    <tr className="table-row">
                        <th className="table-head">10:50</th>

                        <td className="table-cell">{checkSlot(8)}</td>
                        <td className="table-cell">{checkSlot(9)}</td>
                        <td className="table-cell">{checkSlot(10)}</td>
                        <td className="table-cell">{checkSlot(11)}</td>
                        <td className="table-cell">{checkSlot(12)}</td>
                        <td className="table-cell">{checkSlot(13)}</td>
                        <td className="table-cell">{checkSlot(14)}</td>
                    </tr>

                    <tr className="table-row">
                        <th className="table-head">12:40</th>

                        <td className="table-cell">{checkSlot(15)}</td>
                        <td className="table-cell">{checkSlot(16)}</td>
                        <td className="table-cell">{checkSlot(17)}</td>
                        <td className="table-cell">{checkSlot(18)}</td>
                        <td className="table-cell">{checkSlot(19)}</td>
                        <td className="table-cell">{checkSlot(20)}</td>
                        <td className="table-cell">{checkSlot(21)}</td>
                    </tr>

                    <tr className="table-row">
                        <th className="table-head">14:30</th>

                        <td className="table-cell">{checkSlot(22)}</td>
                        <td className="table-cell">{checkSlot(23)}</td>
                        <td className="table-cell">{checkSlot(24)}</td>
                        <td className="table-cell">{checkSlot(25)}</td>
                        <td className="table-cell">{checkSlot(26)}</td>
                        <td className="table-cell">{checkSlot(27)}</td>
                        <td className="table-cell">{checkSlot(28)}</td>
                    </tr>

                    <tr className="table-row">
                        <th className="table-head">16:20</th>

                        <td className="table-cell">{checkSlot(29)}</td>
                        <td className="table-cell">{checkSlot(30)}</td>
                        <td className="table-cell">{checkSlot(31)}</td>
                        <td className="table-cell">{checkSlot(32)}</td>
                        <td className="table-cell">{checkSlot(33)}</td>
                        <td className="table-cell">{checkSlot(34)}</td>
                        <td className="table-cell">{checkSlot(35)}</td>
                    </tr>

                    <tr className="table-row">
                        <th className="table-head">18:10</th>

                        <td className="table-cell">{checkSlot(36)}</td>
                        <td className="table-cell">{checkSlot(37)}</td>
                        <td className="table-cell">{checkSlot(38)}</td>
                        <td className="table-cell">{checkSlot(39)}</td>
                        <td className="table-cell">{checkSlot(40)}</td>
                        <td className="table-cell">{checkSlot(41)}</td>
                        <td className="table-cell">{checkSlot(42)}</td>
                    </tr>

                    <tr className="table-row">
                        <th className="table-head">20:00</th>

                        <td className="table-cell">{checkSlot(43)}</td>
                        <td className="table-cell">{checkSlot(44)}</td>
                        <td className="table-cell">{checkSlot(45)}</td>
                        <td className="table-cell">{checkSlot(46)}</td>
                        <td className="table-cell">{checkSlot(47)}</td>
                        <td className="table-cell">{checkSlot(48)}</td>
                        <td className="table-cell">{checkSlot(49)}</td>
                    </tr>
                </tbody>
            </table>
        </section>
    )
}

export default Teacher;