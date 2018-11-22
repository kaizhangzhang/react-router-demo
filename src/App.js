import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
         app 
         <Link to="/about">about</Link>
         <Link to="/users">users</Link>
      </div>
    );
  }
}

export default App;
