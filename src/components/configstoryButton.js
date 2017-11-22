import React, { Component } from 'react';

class Button extends Component {

  render() {
    return (
      <div className="menu">
        <a class="waves-effect waves-light btn">Epouvante</a>
        <a class="waves-effect waves-light btn">Fantastique</a>
        <a class="waves-effect waves-light btn">Jeunesse</a>
        <a class="waves-effect waves-light btn">Aventure</a>
        <a class="waves-effect waves-light btn">Erotique</a>
        <div class="bg"></div>
      </div>
    );
  }
}

export default Button;
