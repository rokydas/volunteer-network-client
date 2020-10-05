import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import eventData from '../fakeData/eventData';

import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

const RegisterVolunteer = () => {

    const history = useHistory();

    const name = JSON.parse(localStorage.getItem("name"));
    const email = JSON.parse(localStorage.getItem("email")); 

    const { id } = useParams();
    const event = eventData[id - 1];

    const [selectedDate, setSelectedDate] = useState(new Date());

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const handleAddRegisteredEvent = (e) => {
        const registeredInfo = {
            id: event.id,
            name: name,
            email: email,
            eventName: event.name,
            eventDescription: event.description,
            eventImg: event.img,
            date: selectedDate,
        }
        fetch('https://volunteer-network18.herokuapp.com/addRegisteredEvent', { 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(registeredInfo)
        })
        .then(res => res.json())
        .then(data => {
            history.replace('/registeredEvent');
            history.go(0);
        })
        e.preventDefault();
    }

    return (
        <div>
            <br/><br/>
            <h3 className="text-center">Register for this event</h3><br/><br/>
            <div className="container h-100">
                <div className="row h-100 justify-content-center align-items-center">
                    <div className="col-10 col-md-8 col-lg-6">
                        <form className="form-example">
                            <div className="form-group">
                                <label>Full Name:</label>
                                <input type="text" className="form-control" placeholder="Full Name:" name="fullName" value={name} />
                            </div>

                            <div className="form-group">
                                <label>Email:</label>
                                <input type="text" className="form-control" placeholder="Email:" name="email" value={email} />
                            </div>

                            <div className="form-group">
                                <label>Event Name:</label>
                                <input type="text" className="form-control" placeholder="Event Name:" name="eventName" value={event.name} />
                            </div>

                            <div className="form-group">
                                <label>Event Description:</label>
                                <textarea rows="5" type="text" className="form-control" placeholder="Event Description:" name="eventDescription" value={event.description} />
                            </div>

                            <div className="form-group">
                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                    <KeyboardDatePicker
                                        margin="normal"
                                        id="date-picker-dialog"
                                        label="Date picker dialog"
                                        format="MM/dd/yyyy"
                                        value={selectedDate}
                                        onChange={handleDateChange}
                                        KeyboardButtonProps={{
                                            'aria-label': 'change date',
                                        }}
                                    />
                                </MuiPickersUtilsProvider>
                            </div>
                            
                            <button onClick={handleAddRegisteredEvent} className="btn btn-primary btn-customized">Registration</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterVolunteer;