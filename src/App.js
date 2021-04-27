import { Component } from 'react';
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import CreatureList from './CreatureList';
import CreatureSearch from './CreatureSearch';
import './App.css';
import creatures from './creatures.js';


class App extends Component {

  render() {
    return (
      <div className="App"> 
        <Header/>

        <CreatureSearch/>

        <main>
          <CreatureList creatures={creatures} />;
        </main>

        <Footer/>
  
      </div>
    );
  }

}

export default App;
