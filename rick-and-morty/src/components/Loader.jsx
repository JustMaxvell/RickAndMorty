import React from 'react';

import loader from "../img/loader/loader.png";
import "./Loader.css";

export function Loader () {
  return (
    <div className="App">
      <div className="loader">
        <img src={loader} alt="Loading"/>
      </div>
    </div>
  )
}