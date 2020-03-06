import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PersonList from "./components/PersonList";
import "bootstrap/dist/css/bootstrap.min.css";


class App extends Component {
  render () {
    return (
    <div className="container">
      <div className="row">
        <PersonList />
      </div>
    </div>
    )
  }
};

export default App;
