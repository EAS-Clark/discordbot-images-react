import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';



function App() {

  const [images, setImages] = useState([])
  const [input, setInput] = useState("")
  const [value, setValue] = useState('name');

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
        <label>
          Serch type
          <select value={value} onChange={handleChange}>
            <option value="name">Name</option>
            <option value="tag">Tag</option>
          </select>
        </label>

        <p>{value === 'name' &&
          <h2>
            <input type="text" onChange={handleInoutChange} />
            {
              images
                .filter(image => image && image.Name_of_image.includes(input))
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
        <p>{value === 'tag' &&
          <h2>
            <input type="text" onChange={handleInoutChange} />
            {
              images
                .filter(image => image && image.tag.includes(input))
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

export default App;
