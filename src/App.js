import { Component } from 'react';
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import CreatureList from './CreatureList';
import './App.css';


class App extends Component {

  render() {
    return (
      <div className="App"> 
        <Header/>

        <main>
          <CreatureList/>;
        </main>
        
        <Footer/>
  
      </div>
    );
  }

}

export default App;
