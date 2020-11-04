import React, { useEffect, useState } from 'react';
// import eventData from '../fakeData/eventData';
import Event from '../Event/Event';
import './Home.css';
import loading from '../../images/loading.gif';

const Home = () => {

    const [eventData, setEventData] = useState([])

    useEffect(() => {
        fetch('https://volunteer-network18.herokuapp.com/event')
            .then(res => res.json())
            .then(data => setEventData(data))
    }, [])

    return (
        <div className="custom-container"><br />
            <h1 className="text-center">I grow by helping people in need.</h1><br />
            {eventData.length > 0 ?
                <div className="row">
                    <div className="card-deck">
                        {
                            eventData.map(event => <Event key={event._id} event={event}></Event>)
                        }
                    </div>
                </div>

                :
                <div className="text-center">
                    <img src={loading} alt="" />
                </div>
            }
        </div>
    );
};

export default Home;