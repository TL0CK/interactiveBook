import React, { Component } from 'react';

import { BrowserRouter, Route, Link } from 'react-router-dom'

class EnterButton extends Component {

  render() {
    return (
      <div>
        <a id="enterButton" href="/universe" class="waves-effect waves-light btn">Commencer</a>
      </div>
    );
  }
}

export default EnterButton;
