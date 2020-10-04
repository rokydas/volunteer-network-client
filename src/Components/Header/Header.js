import React from 'react';
import { Link } from 'react-router-dom';
import eventData from '../fakeData/eventData';

const Header = () => {

    const handleAddEvent = () => {
        fetch('http://localhost:5000/addEvent', { 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(eventData)
        })
    }

    return (
        <div className="header">
            <h2>I am header</h2>
            <Link to='/'>Home</Link>
            <Link to='/login'>Login</Link>
            {/* <Link to='/registerVolunteer'>Register Volunteer</Link> */}  
            {/* <button onClick={handleAddEvent}>Add event</button> */}
            <Link to='/registeredEvent'>Registered Event</Link>
        </div>
    );
};

export default Header;