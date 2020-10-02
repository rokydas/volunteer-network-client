import React from 'react';

const Event = (props) => {
    return (
        <div>
            <h3>{props.event.name}</h3>
            <img src={props.event.img} alt=""/>
        </div>
    );
};

export default Event;