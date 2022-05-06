import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import React from "react";
import ReactDOM from 'react-dom/client';
import Upload from './components/upload'
import Get from './components/get'
import Search from './components/search'

function App() {
/*
  <Upload></Upload>
  <p></p>
  <Get></Get>
  <Search></Search>
*/

  return (
    <div className="App">

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Upload></Upload>
      
        <Get></Get>
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
