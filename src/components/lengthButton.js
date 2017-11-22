import React, { Component } from 'react';

class LengthButton extends Component {
  
  render() {
    return (
      <div>
        <a href="./length/story" class="waves-effect waves-light btn">Ultra Courte (~15min)</a>
        <a href="./length/story" class="waves-effect waves-light btn">Courte (~30min)</a>
        <a href="./length/story" class="waves-effect waves-light btn">Moyenne (~1h)</a>
        <a href="./length/story" class="waves-effect waves-light btn">Longue (~2h)</a>
      </div>
    );
  }
}

export default LengthButton;
