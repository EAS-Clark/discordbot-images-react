import { useState, useEffect } from 'react';

export default function Get() {

    const [serverResponse, setserverResponse] = useState([])
 
    const handleSubmit = (event) => {
        event.preventDefault();
        

        fetch("/api/images", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'action': 'tags',
            }
        })
            .then(response => response.json())
            .then(data => {
                setserverResponse(data.response);
            })
    }

    return (
        <>
            <label>list of tags: {serverResponse} </label> 
            <button onClick={handleSubmit}>Get list tags</button>
        </>
    )

} 