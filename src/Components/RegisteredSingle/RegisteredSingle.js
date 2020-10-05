import React from 'react';
import { useHistory } from 'react-router-dom';

const RegisteredSingle = (props) => {

    const {eventName, eventImg, eventDescription, email, _id} = props.event;

    const signedInEmail = JSON.parse(localStorage.getItem("email")); 

    const history = useHistory();

    const handleDelete = () => {
        fetch(`https://volunteer-network18.herokuapp.com/delete/${_id}`, { method: 'DELETE' })
        .then(res => res.json())
        .then(result => {
            history.go(0);
        })
    }

    return (
        // <div>

        //     {email === signedInEmail && <div>
        //         <img src={eventImg} alt="Load"/>
        //         <h3>{eventName}</h3>
        //         <p>{eventDescription}</p>
        //         <button onClick={handleDelete}>Cancel</button>
        //     </div>}
            
        // </div>
        <div style={{display: 'inline-block'}}>
            { email === signedInEmail && 
                <div className="card event-block" style={{width: '20rem'}}>
                    <img className="card-img-top" src={eventImg} alt="Card image cap"></img>
                    <div className="card-body">
                        <h5 className="card-title">{eventName}</h5>
                        <p className="card-text">{eventDescription}</p>
                    </div>
                    <div className="card-footer">
                        <button className="btn btn-danger" onClick={handleDelete}>Cancel</button>
                    </div>
                </div>
            }
        </div>
        
    );
};

export default RegisteredSingle;