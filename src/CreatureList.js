import React, { Component } from 'react';
import CreatureItem from './CreatureItem';
import './CreatureList.css';

class CreatureList extends Component {
    

  render() {
    const creatures = this.props.creatures;
    return (
      <ul className="CreatureList">
        {creatures.map((creature, index) => {
          
          return <CreatureItem key={index} creature={creature} />;
        })}
        

      </ul>

    );
  }
}

export default CreatureList;