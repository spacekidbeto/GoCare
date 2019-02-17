import React, { Component } from 'react';
import Navigation from './components/Navigation';
import locations from './data/locations';
import Masthead from './components/Masthead';
import About from './components/About';
import Map from './components/Map';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import './App.css';
import './css/creative.min.css';

 class App extends Component {
  render() {
    console.log(locations);
    return (
      <div>
      <Navigation />
      <Masthead />
      <About />
      <Map />
      <Contacts />
      <Footer />        
      </div>
    )
  }
}

export default App
