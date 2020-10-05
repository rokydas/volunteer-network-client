import React, { useEffect, useState } from 'react';
// import eventData from '../fakeData/eventData';
import Event from '../Event/Event';
import './Home.css';

const Home = () => {

    const [eventData, setEventData] = useState([])

    useEffect(() => {
        fetch('https://volunteer-network18.herokuapp.com/event')
        .then(res => res.json())
        .then(data => setEventData(data))
    }, [])

    const name = localStorage.getItem("name");
    const email = localStorage.getItem("email");
    console.log(name, email)

    return (
        <div className="custom-container">
            <h3>Name: {name}</h3>
            <h3>Email: {email}</h3>
            {
                eventData.map(event => <Event key={event._id} event={event}></Event>)
            }
        </div>
    );
};

export default Home;