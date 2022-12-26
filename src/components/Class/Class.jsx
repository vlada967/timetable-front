function Class({ theClass, className }) {
    return (
        <section className="class">
            <h3 className="class_title">Расписание аудитории {className}</h3>
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

                        {theClass[0].map((item) => {
                            if (item) {
                                return <td className="table-cell">{item.course.name} <br></br> {item.teacher.name}</td>
                            } else {
                                return <td className="table-cell"></td>
                            }
                        })}
                    </tr>

                    <tr className="table-row">
                        <th className="table-head">10:50</th>

                        {theClass[1].map((item) => {
                            if (item) {
                                return <td className="table-cell">{item.course.name} <br></br> {item.teacher.name}</td>
                            } else {
                                return <td className="table-cell"></td>
                            }
                        })}
                    </tr>

                    <tr className="table-row">
                        <th className="table-head">12:40</th>

                        {theClass[2].map((item) => {
                            if (item) {
                                return <td className="table-cell">{item.course.name} <br></br> {item.teacher.name}</td>
                            } else {
                                return <td className="table-cell"></td>
                            }
                        })}
                    </tr>

                    <tr className="table-row">
                        <th className="table-head">14:30</th>

                        {theClass[3].map((item) => {
                            if (item) {
                                return <td className="table-cell">{item.course.name} <br></br> {item.teacher.name}</td>
                            } else {
                                return <td className="table-cell"></td>
                            }
                        })}
                    </tr>

                    <tr className="table-row">
                        <th className="table-head">16:20</th>

                        {theClass[4].map((item) => {
                            if (item) {
                                return <td className="table-cell">{item.course.name} <br></br> {item.teacher.name}</td>
                            } else {
                                return <td className="table-cell"></td>
                            }
                        })}
                    </tr>

                    <tr className="table-row">
                        <th className="table-head">18:10</th>

                        {theClass[5].map((item) => {
                            if (item) {
                                return <td className="table-cell">{item.course.name} <br></br> {item.teacher.name}</td>
                            } else {
                                return <td className="table-cell"></td>
                            }
                        })}
                    </tr>

                    <tr className="table-row">
                        <th className="table-head">20:00</th>

                        {theClass[6].map((item) => {
                            if (item) {
                                return <td className="table-cell">{item.course.name} <br></br> {item.teacher.name}</td>
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
export default Class;
