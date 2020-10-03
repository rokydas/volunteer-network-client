import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <h2>I am header</h2>
            <Link to='/login'>Login</Link>
            <Link to='/registerVolunteer'>Register Volunteer</Link>
        </div>
    );
};

export default Header;