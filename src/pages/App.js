import React, { Component } from 'react';
import '../styles/App.css';

import Button from '../components/configstoryButton.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="bg"></div>
        <Button/>
      </div>
    );
  }
}

export default App;
