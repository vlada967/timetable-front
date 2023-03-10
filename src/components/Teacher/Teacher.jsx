function Teacher({ theTeacher, teacherName }) {
    let names = [];

    return (
        <section className="class">
            <h3 className="class_title">Timetable of teacher {teacherName}</h3>
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

                        {theTeacher[0].map((item) => {
                            if (item) {
                                names = [];
                                item.groups.forEach((group) => {
                                    if (!names.includes(group.name)) {
                                        names.push(group.name)
                                        names.push(" ")
                                    }
                                })
                                return <td className="table-cell">{item.course.name} <br></br> {names} <br></br>  {item.room.name}</td>
                            } else {
                                return <td className="table-cell"></td>
                            }
                        })}
                    </tr>

                    <tr className="table-row">
                        <th className="table-head">10:50</th>

                        {theTeacher[1].map((item) => {
                            if (item) {
                                names = [];
                                item.groups.forEach((group) => {
                                    names.push(group.name)
                                    names.push(" ")
                                })
                                return <td className="table-cell">{item.course.name} <br></br> {names} <br></br>  {item.room.name}</td>
                            } else {
                                return <td className="table-cell"></td>
                            }
                        })}
                    </tr>

                    <tr className="table-row">
                        <th className="table-head">12:40</th>

                        {theTeacher[2].map((item) => {
                            if (item) {
                                names = [];
                                item.groups.forEach((group) => {
                                    names.push(group.name)
                                    names.push(" ")
                                })
                                return <td className="table-cell">{item.course.name} <br></br> {names} <br></br>  {item.room.name}</td>
                            } else {
                                return <td className="table-cell"></td>
                            }
                        })}
                    </tr>

                    <tr className="table-row">
                        <th className="table-head">14:30</th>

                        {theTeacher[3].map((item) => {
                            if (item) {
                                names = [];
                                item.groups.forEach((group) => {
                                    names.push(group.name)
                                    names.push(" ")
                                })
                                return <td className="table-cell">{item.course.name} <br></br> {names} <br></br>  {item.room.name}</td>
                            } else {
                                return <td className="table-cell"></td>
                            }
                        })}
                    </tr>

                    <tr className="table-row">
                        <th className="table-head">16:20</th>

                        {theTeacher[4].map((item) => {
                            if (item) {
                                names = [];
                                item.groups.forEach((group) => {
                                    names.push(group.name)
                                    names.push(" ")
                                })
                                return <td className="table-cell">{item.course.name} <br></br> {names} <br></br>  {item.room.name}</td>
                            } else {
                                return <td className="table-cell"></td>
                            }
                        })}
                    </tr>

                    <tr className="table-row">
                        <th className="table-head">18:10</th>

                        {theTeacher[5].map((item) => {
                            if (item) {
                                names = [];
                                item.groups.forEach((group) => {
                                    names.push(group.name)
                                    names.push(" ")
                                })
                                return <td className="table-cell">{item.course.name} <br></br> {names} <br></br>  {item.room.name}</td>
                            } else {
                                return <td className="table-cell"></td>
                            }
                        })}
                    </tr>

                    <tr className="table-row">
                        <th className="table-head">20:00</th>

                        {theTeacher[6].map((item) => {
                            if (item) {
                                names = [];
                                item.groups.forEach((group) => {
                                    names.push(group.name)
                                    names.push(" ")
                                })
                                return <td className="table-cell">{item.course.name} <br></br> {names} <br></br>  {item.room.name}</td>
                            } else {
                                return <td className="table-cell"></td>
                            }
                        })}
                    </tr>
                </tbody>
            </table>
        </section>
    )
}
export default Teacher;
