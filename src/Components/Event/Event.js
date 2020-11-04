import React from 'react';
import './Event.css';

const Event = (props) => {
    return (
        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
            <div className="card event-block">
                <img width="100%" className="card-img-top" src={props.event.img} alt="Card image cap"></img>
                <div className="card-body">
                    <h5 className="card-title">{props.event.name}</h5>
                    <p className="card-text">{props.event.description}</p>
                </div>
                <div className="card-footer">
                    <a href={`/RegisterVolunteer/${props.event._id}`} className="btn btn-primary">Register</a>
                </div>
            </div>
        </div>
    );
};

export default Event;

