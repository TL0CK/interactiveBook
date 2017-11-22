import React, { Component } from 'react';
import '../styles/App.css';

import EnterButton from '../components/enterButton.js'

class HomePage extends Component {
  render() {
    return (
      <div className="App">
        <h1>NomBienBadass</h1>
        <EnterButton/>
      </div>
    );
  }
}

export default HomePage;
