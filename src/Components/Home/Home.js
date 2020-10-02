import React from 'react';
import eventData from '../fakeData/eventData';
import Event from '../Event/Event';

const Home = () => {
    return (
        <div>
            <h1>This is home</h1>
            {
                eventData.map(event => <Event event={event}></Event>)
            }
        </div>
    );
};

export default Home;