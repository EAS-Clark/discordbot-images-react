import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import React from "react";
import ReactDOM from 'react-dom/client';

import Action from './components/action';
import Remove from './components/delete';
import Edit from './components/edit';
import Get from './components/get';
import Random from './components/random';
import Search from './components/search';
import Stats from './components/stats';
import Tags from './components/tags';
import Upload from './components/upload';




function App() {
/*
  <Action></Action>
  <Remove></Remove>
  <Edit></Edit>
  <Get></Get>
  <Random></Random>
  <Search></Search>
  <Stats></Stats>
  <Tags></Tags>
  <Upload></Upload>
  
  <p></p>

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
