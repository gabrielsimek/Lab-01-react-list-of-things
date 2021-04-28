import { Component } from 'react';
import './CreatureSearch.css';

export default class CreatureSearch extends Component {
  state = {
    nameSearch: '',
    sortField: '',
    hornsFilter: '',
    keywordFilter: ''
  };

  handleNameChange = (e) => {
    this.setState({ nameSearch: e.target.value });
  };

  handleSortChange = (e) => {
    this.setState({ sortField: e.target.value });
  };

  handleHornsSortChange = (e) => {
    this.setState({ hornsFilter: e.target.value });
  };

  handleKeywordsSortChange = (e) => {
    this.setState({ keywordFilter: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSearch(this.state);
  }

  componentDidUpdate(prevProp, prevState) {
    if (prevState !== this.state) {
      this.props.onSearch(this.state);
    }
  }

  
  
  
  render() {
    const horns = this.props.horns;
    const keywords = this.props.keyWord;
    
    const { nameSearch, sortField, hornsFilter, keywordFilter } = this.state;

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
          <option value="">All</option>

          <option value="title">By name</option>

          <option value="horns">By horns</option>
        </select>

        <select
          name="hornsField"
          value={hornsFilter}
          onChange={this.handleHornsSortChange}
        >
          <option value="allHorns">all horns</option>
          {horns.map((horn) => {
            return <option 
              value={horn}
              key={horn}
            >
              {horn}
            </option>;
          })}
        </select>

        <select
          name="keywordField"
          value={keywordFilter}
          onChange={this.handleKeywordsSortChange}
        >
          <option value="allKeywords">all keywords</option>
          {keywords.map((keyword) => {
            return <option 
              value={keyword}
              key={keyword}
            >
              {keyword}
            </option>;
          })}
        </select>
        

        <button>Search</button>
      </form>
    );
  }
}
