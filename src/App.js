import { Component } from 'react';
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import CreatureList from './CreatureList';
import './App.css';
import creatures from './creatures.js';

console.log(creatures);
class App extends Component {

  render() {
    return (
      <div className="App"> 
        <Header/>

        <main>
          <CreatureList creatures={creatures} />;
        </main>

        <Footer/>
  
      </div>
    );
  }

}

export default App;
