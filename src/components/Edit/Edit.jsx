import { Route, Switch, Link, useHistory } from 'react-router-dom';
import Classes from '../Classes/Classes';
import Groupes from '../Groupes/Groupes';
// import Teachers from '../Teachers/Teachers';
// import Students from '../Students/Students';

function Edit() {
    return (
        <div className="edit">
            <section className="edit__nav">
                <Link to='/edit/classes' className="edit__link">🎀 Аудитории</Link>
                <Link to='/edit/groupes' className="edit__link">🎀 Группы</Link>
                <Link to='/edit/teachers' className="edit__link">🎀 Преподаватели</Link>
                <Link to='/edit/students' className="edit__link">🎀 Студенты</Link>
                <Link to='/edit/users' className="edit__link">🎀 Пользователи</Link>
            </section>

            <Switch>
                <Route path="/edit/classes">
                    <Classes />
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