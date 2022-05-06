import { useState, useEffect } from 'react';

export default function Get() {

    const [images, setImages] = useState([])
    const [input, setInput] = useState("*");


    const handleSubmit = (event) => {
        console.log(input);
        event.preventDefault();

        fetch("/api/images", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'action': 'random',
                'input': input,
            }
        })
            .then(response => response.json())
            .then(data => {
                console.log(data.response);
                setImages(data.response);
            })
    }

    const handleInoutChange = (e) => {
        setInput(e.target.value)
    }


    return (
        <><p>
            {<h2>
                <input type="text" onChange={handleInoutChange} />
                <button onClick={handleSubmit}>
                    Search
                </button>
                <p>name: {images.Name_of_image}</p>
                <p>tag: {images.tag}</p>
                <p>id: {images.id}</p>
                <img width="200" src={images.HTML_URL} />
            </h2>}
        </p></>
    )

}

