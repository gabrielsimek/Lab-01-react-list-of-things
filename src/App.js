import { Component } from 'react';
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './App.css';


class App extends Component {

  render() {
    return (
      <div className="App"> 
        <Header/>

        <main>
        A list
        </main>
        <Footer/>
  
      </div>
    );
  }

}

export default App;
