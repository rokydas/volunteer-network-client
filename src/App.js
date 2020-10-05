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
import AdminShowEvent from './Components/AdminShowEvent/AdminShowEvent';

export const UserContext = createContext()

function App() {

  return (
    <div>
      
      <Router>
        <Header/>
        <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>
          <Route path='/login'>
            <Login/>
          </Route>
          <Route path='/adminShowEvent'>
            <AdminShowEvent/>
          </Route>
          <PrivateRoute path='/registerVolunteer/:id'>
            <RegisterVolunteer/>
          </PrivateRoute>
          <PrivateRoute path='/registeredEvent'>
            <RegisteredEvent/>
          </PrivateRoute>
          <Route path='*'>
            <NotFound/>
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
