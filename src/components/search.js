import { useState, useEffect } from 'react';

export default function Get() {

    const [images, setImages] = useState([])
    const [input, setInput] = useState("Name")
    const [value, setValue] = useState('Name_of_image');

    const handleChange = (event) => {
        setValue(event.target.value);

    };

    const handleSubmit = (event) => {
        event.preventDefault();

        fetch("/api/images", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'action': 'search',
                'type': value,
                'input': input,
            }
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                if (data.status_code == 400) {
                    alert("data: " + data.response);
                } else {
                    console.log(data.response);
                    setImages(data.response);
                }


            }).catch(error => {

                console.log('error: ' +error);
               
            });
    }

    const handleInoutChange = (e) => {
        setInput(e.target.value)
    }


    return (
        <><label>
            Serch type
            <select value={value} onChange={handleChange} name="textbox">
                <option value="name">Name</option>
                <option value="url">url</option>
                <option value="id">id</option>
            </select>
        </label><p>{<h2>
            <input type="text" onChange={handleInoutChange} />
            <button onClick={handleSubmit}>
                Search
            </button>
            <p>name: {images.Name_of_image || ''}</p>
            <p>tag: {images.tag || ''}</p>
            <p>id: {images.id || ''}</p>
            <img width="200" src={images.HTML_URL || ''} />
        </h2>}</p></>
    )

} 