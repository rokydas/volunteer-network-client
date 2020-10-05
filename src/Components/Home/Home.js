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

    return (
        <div className="custom-container">
            {
                eventData.map(event => <Event key={event._id} event={event}></Event>)
            }
        </div>
    );
};

export default Home;