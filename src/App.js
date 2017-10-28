import React from 'react';
// import './App.css';
import AnimeList from './components/AnimeList';

import { connect } from 'react-redux';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>AnimeListr</h1>
        </header>
        <div className="content">
            <AnimeList />
        </div>
      </div>
    );
  }
}

export default connect(function(state){
  return {
    list: state.shows.collection
  };
})(App);
