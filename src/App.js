import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Forecast from './Components/Forecast/Forecast';
import globe from './globe.jpg';




class App extends Component {
  render() {
    return (
      <div className="App">
      
        <header className="App-header">
          <img src={globe} className="App-logo" alt="logo" />
          <h1 className="App-title">Weather Getter</h1>
          
        </header>
        <p></p>
        <Forecast />
        {/* <link rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Nunito"> */}
      </div>
    );
  }
}

export default App;
