import React, { Component } from 'react';
import '../styles/App.css';

import LengthButton from "../components/lengthButton"

class StoryLength extends Component {

  //Il nous faudra un test pour vérifier que si quelqu'un arrive jusqu'ici il possède bien un univers !

  render() {
    return (
      <div className="App">
        <div id="bg"></div>
        <h1 id="lengthTitle">Choisissez la durée de votre histoire</h1>
        <LengthButton/>
      </div>
    );
  }
}

export default StoryLength;
