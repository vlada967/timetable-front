import React from 'react';
import { Route, Switch, Link, useHistory } from 'react-router-dom';
import Classes from '../Classes/Classes';
import Groups from '../Groups/Groups';
import Teachers from '../Teachers/Teachers';
import Courses from '../Courses/Courses';
import Users from '../Users/Users';
import * as api from '../../utils/api.js';

function Edit({ classes, groups, slots, courses, teachers, setTeachers, setCourses, setGroups, users, setUsers, isAdmin }) {
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
                <Link to='/edit/classes' className="edit__link">🎀 Classes</Link>
                <Link to='/edit/groupes' className="edit__link">🎀 Groups</Link>
                <Link to='/edit/teachers' className="edit__link">🎀 Teachers</Link>
                <Link to='/edit/courses' className="edit__link">🎀 Courses</Link>
                {isAdmin && <Link to='/edit/users' className="edit__link">🎀 Users</Link>}

                <button onClick={generateTimetable} className="edit__button">Generate timetable</button>
                <p className={isVisible ? "edit__success edit__opened" : "edit__success"}>Timetable is successfully generated!</p>
            </section>


            <Switch>
                <Route path="/edit/classes">
                    <Classes classes={classes} slots={slots} />
                </Route>
                <Route path="/edit/groupes">
                    <Groups groups={groups} courses={courses} slots={slots} setGroups={setGroups} />
                </Route>
                <Route path="/edit/teachers">
                    <Teachers teachers={teachers} setTeachers={setTeachers} slots={slots} />
                </Route>
                <Route path="/edit/courses">
                    <Courses courses={courses} setCourses={setCourses} slots={slots} />
                </Route>
                <Route path="/edit/users">
                    <Users users={users} setUsers={setUsers} slots={slots} />
                </Route>
            </Switch>

        </div>
    );
}

export default Edit;