import { useState, useEffect } from 'react';

export default function Get() {

    const [serverResponse, setserverResponse] = useState([])
 
    const handleSubmit = (event) => {
        event.preventDefault();
        

        fetch("/api/images", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'action': 'action',
            }
        })
            .then(response => response.json())
            .then(data => {
                setserverResponse(data.response);
            })
    }

    return (
        <>
            <label>Actions: {serverResponse} </label> 
            <button onClick={handleSubmit}>Action</button>
        </>
    )

} 