import React, { useState } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import { useHistory, useLocation } from 'react-router-dom';
import { firebaseConfig } from './firebase.config';
import './Login.css';

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
            localStorage.setItem("name", JSON.stringify(user.displayName));
            localStorage.setItem("email", JSON.stringify(user.email));
            history.replace(from);
            history.go(0);
        }).catch(error => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setError({errorCode, errorMessage});
        });
    }

    return (
        <div className="login">
            <div className="login-box">
                <h3>Login</h3><br/>

                <button className="login-btn" onClick={handleLogin}>
                    <img src="https://img.icons8.com/color/48/000000/google-logo.png"/>
                    <b>Continue with Google</b>
                </button>

                <p>Don't have an account? Create One</p>

                <p style={{color: 'red'}}>{error.errorCode} {error.errorMessage}</p>
            </div>
            
        </div>
    );
};

export default Login;