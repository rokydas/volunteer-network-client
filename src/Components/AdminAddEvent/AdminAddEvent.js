import React from 'react';

const AdminAddEvent = () => {

    const handleAddEvent = (e) => {
        
        e.preventDefault();
    }

    return (
        <div>
            <form action="">
                <input type="text" placeholder="Event Name"/>
                <textarea rows="5" type="text" placeholder="Event Description"/>
                <input type="text" placeholder="Image URL"/>
                <button onClick={handleAddEvent}>Add this Event</button>
            </form>
        </div>
    );
};

export default AdminAddEvent;