import React, { useEffect } from 'react';
import { Route, Switch, Redirect, useHistory } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Login from '../Login/Login';
import View from '../View/View';
import Edit from '../Edit/Edit';
import Class from '../Class/Class';
import Group from '../Group/Group';
import Teacher from '../Teacher/Teacher';
import ViewClasses from '../ViewClasses/ViewClasses';
import ViewGroupes from '../ViewGroups/ViewGroups';
import ViewTeachers from '../ViewTeachers/ViewTeachers';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import * as auth from '../../utils/auth.js';
import * as api from '../../utils/api.js';

function App() {
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [classes, setClasses] = React.useState([]);
  const [groups, setGroups] = React.useState([]);
  const [teachers, setTeachers] = React.useState([]);
  const [slots, setSlots] = React.useState([]);
  const [courses, setCourses] = React.useState([]);
  const [users, setUsers] = React.useState([]);
  const [theClass, setTheClass] = React.useState({});
  const theClassId = React.useRef();
  const [theGroup, setTheGroup] = React.useState({});
  const theGroupId = React.useRef();
  const [theTeacher, setTheTeacher] = React.useState({});
  const theTeacherId = React.useRef();
  const [teacherName, setTeacherName] = React.useState();
  const [groupName, setGroupName] = React.useState();
  const [className, setClassName] = React.useState();
  const [isAdmin, setIsAdmin] = React.useState();
  const history = useHistory();

  useEffect(() => {
    tokenCheck();
    getClasses();
    getGroups();
    getTeachers();
    getSlots();
    getCourses();
    getUsers();
  }, []);

  useEffect(() => {
    const ws = new WebSocket('ws://127.0.0.1:8080/api/v1/socket')
    console.log('Subscribed!')
    ws.onmessage = async ()=>{
      console.log(`Got message, refreshing all shit`)
      console.log(`Fucking ids are: ${theTeacherId.current}, ${theGroupId.current}, ${theClassId.current}`)
      const tid = theTeacherId.current
      const gid = theGroupId.current
      const cid = theClassId.current
      if(tid)setTheTeacher(await api.getTeacher(tid))
      if(gid)setTheGroup(await api.getGroup(gid))
      if(cid)setTheClass(await api.getClass(cid))
      console.log('Your shit is fresh now, go fuck yourself!')
    }
    return ()=>{
      ws.close()
      console.log('Unsubscribed!')
    }
  }, [])

  useEffect(() => {
    checkAdmin();
  }, [loggedIn]);

  useEffect(() => {
    if (theClass.length === 7) {
      history.push(`/classes/${theClassId.current}`);
    }
  }, [theClass]);

  useEffect(() => {
    if (theGroup.length === 7) {
      history.push(`/groups/${theGroupId.current}`);
    }
  }, [theGroup]);

  useEffect(() => {
    if (theTeacher.length === 7) {
      history.push(`/teachers/${theTeacherId.current}`);
    }
  }, [theTeacher]);

  function tokenCheck() {
    const jwt = localStorage.getItem('token');
    if (jwt) {
      setLoggedIn(true);
    }
  }

  function handleLogin() {
    setLoggedIn(true);
  }

  function onLogin(email, password) {
    return auth.authorize(email, password)
      .then((data) => {
        if (data.token) {
          handleLogin();
          console.log(data.token)
          history.push('/edit');
        }
      })
      .catch(err => console.log(err));
  }

  function handleClassClick(e) {
    classes.forEach(g => {
      if (g.id.toString() === e.target.id) {
        setClassName(g.name);
        api.getTheClass(e.target.id)
          .then((data) => {
            theClassId.current = e.target.id;
            setTheClass(data);
          })
          .catch(err => console.log(err))
      }
    });
  }

  function handleGroupClick(e) {
    groups.forEach(g => {
      if (g.id.toString() === e.target.id) {
        setGroupName(g.name);
        api.getGroup(e.target.id)
          .then((data) => {
            theGroupId.current = e.target.id;
            setTheGroup(data);
          })
          .catch(err => console.log(err))
      }
    });
  }

  function handleTeacherClick(e) {
    teachers.forEach(g => {
      if (g.id.toString() === e.target.id) {
        setTeacherName(g.name);
        api.getTeacher(e.target.id)
          .then((data) => {
            theTeacherId.current = e.target.id;
            setTheTeacher(data);
          })
          .catch(err => console.log(err))
      }
    });
  }

  function getClasses() {
    return api.getClasses()
      .then((data) => {
        setClasses(data);
      })
      .catch(err => console.log(err));
  }

  function getGroups() {
    return api.getGroups()
      .then((data) => {
        setGroups(data);
      })
      .catch(err => console.log(err));
  }

  function getTeachers() {
    return api.getTeachers()
      .then((data) => {
        setTeachers(data);
      })
      .catch(err => console.log(err));
  }

  function getSlots() {
    return api.getSlots()
      .then((data) => {
        setSlots(data);
      })
      .catch(err => console.log(err));
  }

  function getCourses() {
    return api.getCourses()
      .then((data) => {
        // console.log('courses in app', data)
        setCourses(data);
      })
      .catch(err => console.log(err));
  }

  function getUsers() {
    return api.getUsers()
      .then((data) => {
        setUsers(data);
      })
      .catch(err => console.log(err));
  }

  function checkAdmin() {
    return api.checkAdmin()
      .then((res) => {
        if (res == 200) {
          setIsAdmin(true);
        }
      })
      .catch(err => console.log(err));
  }

  return (
    <>
      {/* <button onClick={() => { setCount((prev) => ++prev) }}>changed count {count}</button> */}


      <Header />
      <Switch>
        <ProtectedRoute
          path="/edit"
          loggedIn={loggedIn}
          classes={classes}
          groups={groups}
          slots={slots}
          courses={courses}
          teachers={teachers}
          setTeachers={setTeachers}
          setCourses={setCourses}
          setGroups={setGroups}
          setClasses={setClasses}
          users={users}
          setUsers={setUsers}
          isAdmin={isAdmin}
          component={Edit}
        />

        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/signin">
          <Login onLogin={onLogin} />
        </Route>
        <Route path="/view">
          <View />
        </Route>
        <Class path="/classes/:id" theClass={theClass} className={className} courses={courses} groups={groups} rooms={classes} teachers={teachers} slots={slots}></Class>
        <Route exact path="/classes">
          <ViewClasses classes={classes} onClick={handleClassClick} />
        </Route>
        <Group path="/groups/:id" theGroup={theGroup} groupName={groupName} courses={courses} groups={groups} rooms={classes} teachers={teachers} slots={slots}></Group>
        <Route exact path="/groups">
          <ViewGroupes groups={groups} onClick={handleGroupClick} />
        </Route>
        <Teacher path="/teachers/:id" theTeacher={theTeacher} teacherName={teacherName} courses={courses} groups={groups} rooms={classes} teachers={teachers} slots={slots} ></Teacher>
        <Route exact path="/teachers">
          <ViewTeachers teachers={teachers} onClick={handleTeacherClick} />
        </Route>
      </Switch>
    </>
  );
}

export default App;
