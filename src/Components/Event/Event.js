import React from 'react';
import { Link } from 'react-router-dom';

const Event = (props) => {
    return (
        <Link to={`/RegisterVolunteer/${props.event.id}`}>
            <h3>{props.event.name}</h3>
            <img src={props.event.img} alt=""/>
        </Link>
    );
};

export default Event;