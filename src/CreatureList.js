import React, { Component } from 'react';
import CreatureItem from './CreatureItem';
import './CreatureItem.css';

class CreatureList extends Component {
  render() {
    return (
      <ul className="CreatureList">
        <CreatureItem/>

      </ul>

    );
  }
}

export default CreatureList;