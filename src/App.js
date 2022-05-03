import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react';



function App() {

  const [images, setImages] = useState([])
  const [input, setInput] = useState("")
   

  useEffect(() => {
    fetch("/api/images")
    .then(response => response.json())
    .then(data => {
      setImages(data);
     })
  }, [] )

  const handleInoutChange = (e) => {
    setInput(e.target.value)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>

          <input type="text" onChange={handleInoutChange} />

          {
            images
              .filter(image => image && image.Name_of_image.includes(input))      
              .map((image) => 
                <div>
                  <p>id: {image.id}</p>
                  <img width="200" src={image.HTML_URL}/>
                  <p>name: {image.Name_of_image}</p>
                  <p>name: {image.tag}</p>
                </div> 
              )
          }

        </p>
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
