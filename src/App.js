import React, { createContext, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import NotFound from './Components/NotFound/NotFound';
import { BrowserRouter as Router } from 'react-router-dom'
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import RegisterVolunteer from './Components/RegisterVolunteer/RegisterVolunteer';
import 'bootstrap/dist/css/bootstrap.min.css';
import RegisteredEvent from './Components/RegisteredEvent/RegisteredEvent';

export const UserContext = createContext()

function App() {

  const [signedInUser, setSignedInUser] = useState({})

  return (
    <div>
      <UserContext.Provider value={[signedInUser, setSignedInUser]}>
        <Router>
          <Header/>
          <Switch>
            <Route exact path='/'>
              <Home/>
            </Route>
            <Route path='/login'>
              <Login/>
            </Route>
            <PrivateRoute path='/registerVolunteer/:id'>
              <RegisterVolunteer/>
            </PrivateRoute>
            <PrivateRoute path='/registeredEvent'>
              <RegisteredEvent/>
            </PrivateRoute>
            {/* <Route path='/registerVolunteer/:id'>
              <RegisterVolunteer/>
            </Route> */}
            <Route path='*'>
              <NotFound/>
            </Route>
          </Switch>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
