import { useState, useEffect } from 'react';

export default function Get() {

    const [images, setImages] = useState([])
    const [input, setInput] = useState("")
    const [value, setValue] = useState('Name_of_image');

    const handleChange = (event) => {
        setValue(event.target.value);

    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(input);

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
                setImages(data.response);
            })
    }

    const handleInoutChange = (e) => {
        setInput(e.target.value)
    }


    return (
        <><label>
            Serch type
            <select value={value} onChange={handleChange}>
                <option value="name">Name</option>
                <option value="tag">Tag</option>
                <option value="id">id</option>
            </select>
        </label><p>{<h2>
            <input type="text" onChange={handleInoutChange} />
            <button onClick={handleSubmit}>
                Search
            </button>

            {images
                .filter(image => image && image[value].includes(input))
                .map((image) => <div>
                    <p>name: {image.Name_of_image}</p>
                    <p>tag: {image.tag}</p>
                    <p>id: {image.id}</p>
                    <img width="200" src={image.HTML_URL} />
                </div>
                )}
        </h2>}</p></>
    )

} 