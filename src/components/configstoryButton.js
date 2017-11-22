import React, { Component } from 'react';

class Button extends Component {

  render() {
    return (
      <div>
        <ul className="menu">
          <li><a id="btn" class="waves-effect waves-light btn">Epouvante</a></li>
          <li><a id="btn" class="waves-effect waves-light btn">Fantastique</a></li>
          <li><a id="btn" class="waves-effect waves-light btn">Jeunesse</a></li>
          <li><a id="btn" class="waves-effect waves-light btn">Aventure</a></li>
          <li><a id="btn" class="waves-effect waves-light btn">Erotique</a></li>
          <li class="bg"></li>
        </ul>
      </div>
    );
  }
}

export default Button;
