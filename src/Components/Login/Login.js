import React, { useState } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import { firebaseConfig } from './firebase.config';

const Login = () => {

    const [error, setError] = useState({});
    const history = useHistory();
    const location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } };

    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
     }

    var googleProvider = new firebase.auth.GoogleAuthProvider();

    const handleLogin = () => {
        firebase.auth().signInWithPopup(googleProvider)
        .then( result => {
            const user = result.user;
            localStorage.setItem("name", user.displayName);
            localStorage.setItem("email", user.email);
            history.replace(from);
            history.go(0);
        }).catch(error => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setError({errorCode, errorMessage});
        });
    }

    return (
        <div>
            <button onClick={handleLogin}>Continue with Google</button>
            <p style={{color: 'red'}}>{error.errorCode} {error.errorMessage}</p>
        </div>
    );
};

export default Login;