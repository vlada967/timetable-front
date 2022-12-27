import React from 'react';
import { Route, Switch, Link, useHistory } from 'react-router-dom';
import Classes from '../Classes/Classes';
import Groupes from '../Groupes/Groupes';
import * as api from '../../utils/api.js';
// import Teachers from '../Teachers/Teachers';
// import Students from '../Students/Students';

function Edit({ classes, slots }) {
    const [isVisible, setIsVisible] = React.useState(false);

    function generateTimetable() {
        api.generateTimetable()
            .then((data) => {
                if (data.status === 200) {
                    setIsVisible(true);
                }
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="edit">
            <section className="edit__nav">
                <Link to='/edit/classes' className="edit__link">🎀 Аудитории</Link>
                <Link to='/edit/groupes' className="edit__link">🎀 Группы</Link>
                <Link to='/edit/teachers' className="edit__link">🎀 Преподаватели</Link>
                <Link to='/edit/students' className="edit__link">🎀 Студенты</Link>
                <Link to='/edit/users' className="edit__link">🎀 Пользователи</Link>

                <button onClick={generateTimetable} className="edit__button">Сгенерировать расписание</button>
                <p className={isVisible ? "edit__success edit__opened" : "edit__success"}>Расписание успешно сгенерировано!</p>
            </section>



            <Switch>
                <Route path="/edit/classes">
                    <Classes classes={classes} slots={slots} />
                </Route>
                <Route path="/edit/groupes">
                    <Groupes />
                </Route>
                {/* <Route path="/edit/teachers">
                    <Teachers />
                </Route>
                <Route path="/edit/students">
                    <Students />
                </Route> */}
            </Switch>


        </div>
    );
}

export default Edit;