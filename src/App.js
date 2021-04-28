/* eslint-disable indent */
import { Component } from 'react';
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import CreatureList from './CreatureList';
import CreatureSearch from './CreatureSearch';
import './App.css';
import creaturesData from './creatures.js';


class App extends Component {
  state = {
    creatures: creaturesData
  }
  handleSearch = ({ nameSearch, sortField }) => {
    const aRegex = new RegExp(nameSearch, 'i');
    console.log(aRegex);

    const searchedData = creaturesData.filter((creature) => {
      return creature.title.match(aRegex);

    })
    .sort((a, b) => {
      console.log(a[sortField], b[sortField]);
      if (a[sortField] < b[sortField]) return -1;
      if (a[sortField] > b[sortField]) return 1;
      return 0;
    });
   
    this.setState({ creatures: searchedData });
  }
  render() {
    const { creatures } = this.state;
    return (
      <div className="App"> 
        <Header/>

        <CreatureSearch onSearch={this.handleSearch}/>

        <main>
          <CreatureList creatures={creatures} />;
        </main>

        <Footer/>
  
      </div>
    );
  }

}

export default App;
