import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import React from "react";
import ReactDOM from 'react-dom/client';
import Form from './components/Form'


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
        <Form></Form>
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
export default App;
