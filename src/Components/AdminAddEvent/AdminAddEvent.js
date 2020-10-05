import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const AdminAddEvent = () => {

    const [newEvent, setNewEvent] = useState({})

    const history = useHistory();

    const handleOnBlur = (e) => {
        const myEvent = {...newEvent};
        myEvent[e.target.name] = e.target.value;
        setNewEvent(myEvent);
    }

    const handleAddEvent = (e) => {
        
        fetch('https://volunteer-network18.herokuapp.com/addEvent', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newEvent)
        })
        .then(res => res.json())
        .then(data => {
            history.replace('/');
        })

        e.preventDefault();
    }

    return (
        <div>
            <br/><br/>
            <form className="container">
                <div className="form-group">
                    <label>Event Name</label>
                    <input name="name" onBlur={handleOnBlur} type="text" class="form-control" placeholder="Event Name"/>
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Event Description</label>
                    <textarea name="description" onBlur={handleOnBlur} rows="5" type="text" class="form-control" placeholder="Event Description"/>
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Image URL</label>
                    <input class="form-control" name="img" onBlur={handleOnBlur} type="text" placeholder="Image URL"/>
                </div>
                <button onClick={handleAddEvent} class="btn btn-primary">Add this Event</button>
            </form>
            
        </div>
    );
};

export default AdminAddEvent;

