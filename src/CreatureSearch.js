import { Component } from 'react';
import './CreatureSearch.css';

export default class CreatureSearch extends Component {
  state = {
    nameSearch: '',
    sortField: '',
  };

  handleNameChange = (e) => {
    this.setState({ nameSearch: e.target.value });
  };

  handleSortChange = (e) => {
    this.setState({ sortField: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSearch(this.state);
  }
  
  
  render() {
    
    const { nameSearch, sortField } = this.state;

    return (
      <form className="CreatureSearch" 
        onSubmit={this.handleSubmit}
      >
        <input
          name="nameSearch"
          value={nameSearch}
          onChange={this.handleNameChange}
        />

        <select
          name="sortField"
          value={sortField}
          onChange={this.handleSortChange}
        >
          <option value="">Sort All</option>

          <option value="title">By name</option>

          <option value="horns">By horns</option>
        </select>

        <button>Search</button>
      </form>
    );
  }
}
