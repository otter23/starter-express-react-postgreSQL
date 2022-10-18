import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import UserList from './components/UsersList';

import * as sessionActions from './store/session';
import * as usersActions from './store/users';

export default function App() {
  const sessionUser = useSelector((state) => state.session.user);
  const dispatch = useDispatch();

  const [isAuthLoaded, setIsAuthLoaded] = useState(false);

  //restore user Sesssion
  useEffect(() => {
    //on first mount, check whether jwt token credentials matches user in db
    //if so add user to Redux State
    dispatch(sessionActions.restoreUser())
      .then(() => setIsAuthLoaded(true))
      .catch((res) => console.log(res));
  }, [dispatch]);

  //eager load db resources users, channels, messages into state
  useEffect(() => {
    dispatch(usersActions.getAllUsersThunk()).catch((res) => console.log(res));
  }, [dispatch]);

  //only load App after Session Cookie is checked and user is loaded into redux
  if (!isAuthLoaded) return null;

  if (isAuthLoaded) {
    // prettier-ignore
    return (
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to='/' >
                Home
              </Link>
            </li>
            <li>
              <Link to='/users'>
                Users
              </Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path='/users'>
            <UserList />
          </Route>

          <Route path='/'>
            <h1>My Home Page</h1>
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}
