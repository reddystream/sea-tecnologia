import React, { Component } from 'react';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Section from './components/Section';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />
      <Navbar/>
      <Section/>
      <Body />
      <Footer />
    </div>
    );
  }
}

export default App;
