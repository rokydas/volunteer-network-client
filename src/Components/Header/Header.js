import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import eventData from '../fakeData/eventData';
import './Header.css';

const Header = () => {

    const history = useHistory();

    const handleAddEvent = () => {
        fetch('https://volunteer-network18.herokuapp.com/addEvent', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(eventData)
        })
    }

    const handleLogOut = () => {
        localStorage.clear();
        history.go(0);
    }
 
    const name = localStorage.getItem("name");
    const email = localStorage.getItem("email");  

    console.log(name, email)

    return (
        <div className="header">
            <nav className="navbar navbar-expand-lg navbar-light">
                <Link className="navbar-brand" to="/"><img src='https://i.ibb.co/Fg4mX7S/Group-1329.png' alt=""/></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item"><a className="nav-link active" href="/">Home</a></li>
                        {email && <li className="nav-item"><b className="nav-link active">{name}</b></li>}

                        {email && <li className="nav-item"><button className="nav-link active logout-btn" onClick={handleLogOut}>Logout</button></li>}

                        {!email && <li className="nav-item"><a className="nav-link active" href="/login">Login</a></li>} 

                        <li className="nav-item"><a className="nav-link active" href="/">Donation</a></li>
                        <li className="nav-item"><a className="nav-link active" href="/registeredEvent">Your Events</a></li>
                        <li className="nav-item"><a className="nav-link active" href="">Blog</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Header;