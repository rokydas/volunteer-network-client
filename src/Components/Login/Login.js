import React, { useContext, useState } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';

const Login = () => {

    const [signedInUser, setSignedInUser] = useContext(UserContext);
    const [error, setError] = useState({});
    const history = useHistory();
    const location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } };

    const firebaseConfig = {
        apiKey: "AIzaSyA8O4D-ayKuTW7ezIurHoDMF5E-AhDwbdk",
        authDomain: "volunteer-network18.firebaseapp.com",
        databaseURL: "https://volunteer-network18.firebaseio.com",
        projectId: "volunteer-network18",
        storageBucket: "volunteer-network18.appspot.com",
        messagingSenderId: "441128051602",
        appId: "1:441128051602:web:c9cf0121b8a6043724974b"
    };

    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
     }

    var googleProvider = new firebase.auth.GoogleAuthProvider();

    const handleLogin = () => {
        firebase.auth().signInWithPopup(googleProvider)
        .then( result => {
            const user = result.user;
            const newUser = {
                name: user.displayName,
                email: user.email
            }
            setSignedInUser(newUser);
            history.replace(from)
        }).catch(error => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setError({errorCode, errorMessage});
        });
    }

    return (
        <div>
            <h1>I am login page</h1>
            <h3>Name: {signedInUser.name}</h3>
            <button onClick={handleLogin}>Continue with Google</button>
            <p style={{color: 'red'}}>{error.errorCode} {error.errorMessage}</p>
        </div>
    );
};

export default Login;