import React, { Component } from 'react';
import './CreatureItem.css';

class CreatureItem extends Component {
  render() {
    return (
      <li className="CreatureItem">
        <h2>A Rino</h2>
        <img src='https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q=80' alt="A rino"/>
        <p>Horns: 2</p>
      </li>
    );
  }
}


export default CreatureItem;