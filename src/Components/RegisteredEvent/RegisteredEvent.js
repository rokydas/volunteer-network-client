import React, { useEffect, useState } from 'react';
import RegisteredSingle from '../RegisteredSingle/RegisteredSingle';

const RegisteredEvent = () => {

    const [registeredEvent, setRegisteredEvent] = useState([])

    useEffect( () => {
        fetch('https://volunteer-network18.herokuapp.com/registeredEvent')
        .then(res => res.json())
        .then(data => setRegisteredEvent(data))
    }, [])

    return (
        <div className="custom-container">
            {
                registeredEvent.map(event => <RegisteredSingle event={event} key={event.id}/>)
            }
        </div>
    );
};

export default RegisteredEvent;