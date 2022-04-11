import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import Event from './Event';

class App extends Component {
  render() {
    return (
      <div className="App">
        <EventList />
        <CitySearch />
        <Event />
      </div>
    );
  }
}

export default App;
