import React, { Component } from 'react';
import '../styles/App.css';

import EnterButton from '../components/enterButton.js'

class HomePage extends Component {
  render() {
    return (
      <div className="App">
        <h1 id="homeTitle">Interactive Book</h1>
        <EnterButton/>
        <div class="bg"></div>
      </div>
    );
  }
}

export default HomePage;
