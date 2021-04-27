import { Component } from 'react';
import './CreatureSearch.css';

export default class CreatureSearch extends Component {
  
  render() {
    return (
      <form className="CreatureSearch">

        <input/>

        <select>
          <option value="">Sort</option>

          <option value="name">By name</option>

          <option value="lives">By lives</option>
        </select>

        <button>Search</button>

      </form>
    );
  }

}