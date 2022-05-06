import { useState, useEffect } from 'react';

export default function Get() {

    const [serverResponse, setserverResponse] = useState([]);
    const [input, setInput] = useState("");

    const user = 'EAS-Clark'; 
    const handleSubmit = (event) => {
        event.preventDefault();
        

        fetch("/api/images", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'action': 'delete',
                'id': input,
                'user': user,
            }
        })
            .then(response => response.json())
            .then(data => {
                setserverResponse(data.response);
            })
    }

    const handleInoutChange = (e) => {
        setInput(e.target.value);
    }

    return (
        <>
            <label>{serverResponse} </label> 
            <input type="text" onChange={handleInoutChange} />
            <button onClick={handleSubmit}>Action</button>
        </>
    )

} 