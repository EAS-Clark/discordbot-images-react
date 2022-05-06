import { useState, useEffect } from 'react';

export default function Get() {

    const user = 'EAS-Clark';

    const [serverResponse, setserverResponse] = useState([]);
    const [inputs, setInputs] = useState("");

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    
    const handleSubmit = (event) => {
        event.preventDefault();


        fetch("/api/images", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'action': 'edit',
                'id': inputs.id,
                'name': inputs.name,
                'tag': inputs.tag,
                'user': user,
            }
        })
            .then(response => response.json())
            .then(data => {
                setserverResponse(data.response);
            })
    }

   //(id, name, tag) 
    return (
        <>
            <label>{serverResponse} </label>
            <form onSubmit={handleSubmit}>
                <label>Enter image id:
                    <input
                        type="text"
                        name="id"
                        value={inputs.id || ""}
                        onChange={handleChange}
                    />
                </label>
                <label>Enter image name:
                    <input
                        type="text"
                        name="name"
                        value={inputs.name || ""}
                        onChange={handleChange}
                    />
                </label>
                <label>Enter image tag:
                    <input
                        type="text"
                        name="tag"
                        value={inputs.tag || ""}
                        onChange={handleChange}
                    />
                </label>
                <input type="submit" />
            </form>
        </>
    )

} 