/* eslint-disable indent */
import { Component } from 'react';
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import CreatureList from './CreatureList';
import CreatureSearch from './CreatureSearch';
import './App.css';
import creaturesData from './creatures.js';
//looks like this is the best way to return an array with unique value but how exactly does set work....
const creatureHorns = [...new Set(creaturesData.map(creature => creature.horns))];

const creatureKeywords = [...new Set(creaturesData.map(creature => creature.keyword))];



class App extends Component {
  state = {
    creatures: creaturesData
  }
  handleSearch = ({ nameSearch, sortField, hornsFilter, keywordFilter }) => {
    const aRegex = new RegExp(nameSearch, 'i');
    // console.log(aRegex);
    // console.log(hornsFilter);
    // console.log(this.state);

    const searchedData = creaturesData.filter((creature) => {
      return creature.title.match(aRegex);

    })
    .filter(creature => {
      //initial value of first option all needs to be blank!
      return !hornsFilter || creature.horns === Number(hornsFilter);
    })
    .filter(creature => {
      
      return !keywordFilter || creature.keyword === keywordFilter;
    })
    .sort((a, b) => {
      // console.log(a[sortField], b[sortField]);
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

        <CreatureSearch onSearch={this.handleSearch} horns={creatureHorns} keyWord ={creatureKeywords}/>

        <main>
          <CreatureList creatures={creatures} />;
        </main>

        <Footer/>
  
      </div>
    );
  }

}

export default App;
