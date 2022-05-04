import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import React from "react";
import ReactDOM from 'react-dom/client';

function MyForm() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(inputs.Name_of_image + " " +  inputs.HTML_URL + " " + inputs.tag);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter image HTML_URL:
      <input 
        type="text" 
        name="HTML_URL" 
        value={inputs.HTML_URL || ""} 
        onChange={handleChange}
      />
      </label>
      <label>Enter image name:
        <input 
          type="text" 
          name="Name_of_image" 
          value={inputs.Name_of_image || ""} 
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
    
  )
}



function App() {

  const [images, setImages] = useState([])
  const [input, setInput] = useState("")
  const [value, setValue] = useState('Name_of_image');

  const handleChange = (event) => {
    setValue(event.target.value);
  };


  useEffect(() => {
    fetch("/api/images")
      .then(response => response.json())
      .then(data => {
        setImages(data);
      })
  }, [])

  const handleInoutChange = (e) => {
    setInput(e.target.value)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>


        </p>
        <label>
          Serch type
          <select value={value} onChange={handleChange}>
            <option value="Name_of_image">Name</option>
            <option value="tag">Tag</option>
          </select>
        </label>
        <p>{
          <h2>
            <input type="text" onChange={handleInoutChange} />
            {
              images
                .filter(image => image && image[value].includes(input))
                .map((image) =>
                  <div>
                    <p>name: {image.Name_of_image}</p>
                    <p>tag: {image.tag}</p>
                    <p>id: {image.id}</p>
                    <img width="200" src={image.HTML_URL} />
                  </div>
                )
            }
          </h2>
        }</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
export default MyForm;
