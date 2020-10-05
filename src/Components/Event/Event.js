import React from 'react';
import './Event.css';

const Event = (props) => {
    return (

        <div className="card event-block" style={{width: '20rem', display: 'inline-block'}}>
            <img className="card-img-top" src={props.event.img} alt="Card image cap"></img>
            <div className="card-body">
                <h5 className="card-title">{props.event.name}</h5>
                <p className="card-text">{props.event.description}</p>
            </div>
            <div className="card-footer">
                <a href={`/RegisterVolunteer/${props.event._id}`} className="btn btn-primary">Register</a>
            </div>
        </div>
        
        
    );
};

export default Event;

