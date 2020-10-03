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
            <PrivateRoute path='/registerVolunteer'>
              <RegisterVolunteer/>
            </PrivateRoute>
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
