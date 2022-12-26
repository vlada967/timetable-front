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
  const [theClass, setTheClass] = React.useState({});
  const [theGroup, setTheGroup] = React.useState({});
  const [theTeacher, setTheTeacher] = React.useState({});
  const history = useHistory();

  useEffect(() => {
    tokenCheck();
    getClasses();
    getGroups();
    getTeachers();
    getSlots();
  }, []);

  useEffect(() => {
    if (theClass.id) {
      console.log('CLASS', theClass)
      history.push(`/classes/${theClass.id}`);
    }
  }, [theClass]);

  useEffect(() => {
    if (theGroup.id) {
      history.push(`/groups/${theGroup.id}`);
    }
  }, [theGroup]);

  useEffect(() => {
    if (theTeacher.id) {
      history.push(`/teachers/${theTeacher.id}`);
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
    classes.forEach(c => {
      if (c.id.toString() === e.target.id) {
        setTheClass(c);
      }
    });
  }

  function handleGroupClick(e) {
    groups.forEach(g => {
      if (g.id.toString() === e.target.id) {
        console.log('THE GROUP', g)
        setTheGroup(g);
      }
    });
  }

  function handleTeacherClick(e) {
    teachers.forEach(g => {
      if (g.id.toString() === e.target.id) {
        console.log('THE TEACHER', g)
        setTheTeacher(g);
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

  return (
    <>
      <Header />
      <Switch>
        <ProtectedRoute
          path="/edit"
          loggedIn={loggedIn}
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
        <Class path="/classes/:id" theClass={theClass}></Class>
        <Route exact path="/classes">
          <ViewClasses classes={classes} onClick={handleClassClick} />
        </Route>
        <Group path="/groups/:id" theGroup={theGroup} ></Group>
        <Route exact path="/groups">
          <ViewGroupes groups={groups} onClick={handleGroupClick} />
        </Route>
        <Teacher path="/teachers/:id" theTeacher={theTeacher} ></Teacher>
        <Route exact path="/teachers">
          <ViewTeachers teachers={teachers} onClick={handleTeacherClick} />
        </Route>
      </Switch>
    </>
  );
}

export default App;
