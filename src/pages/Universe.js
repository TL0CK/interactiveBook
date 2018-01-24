import React, { Component } from 'react';
import '../styles/App.css';

import UniverseButton from '../components/universeButton.js'

class Universe extends Component {
  render() {
    return (
      <div className="App">
        <div id="bg"></div>
        <h1 id="universeTitle">Choisissez le genre de votre histoire</h1>
        <UniverseButton/>
      </div>
    );
  }
}

export default Universe;
