import React, { useContext } from 'react';
import { UserContext } from '../../App';

const RegisteredSingle = (props) => {

    const {eventName, eventImg, eventDescription, email, _id} = props.event;

    const [signedInUser, setSignedInUser] = useContext(UserContext);

    const handleDelete = () => {
        fetch(`https://volunteer-network18.herokuapp.com/delete/${_id}`, { method: 'DELETE' })
        .then(res => res.json())
        .then(result => console.log(result))
    }

    return (
        <div>
            {email === signedInUser.email && <div>
                <img src={eventImg} alt="Load"/>
                <h3>{eventName}</h3>
                <p>{eventDescription}</p>
                <button onClick={handleDelete}>Cancel</button>
            </div>}
            
        </div>
    );
};

export default RegisteredSingle;