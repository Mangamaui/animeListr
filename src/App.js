import React from 'react';
// import './App.css';
import AnimeList from './components/AnimeList';

import { connect } from 'react-redux';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userID: '001'
    }
  }

  render() {

    let userCollection =  null;
    if(this.props.shows.length > 0) {
      userCollection = <AnimeList class="userCollection" userID={this.state.userID} />
    } else {
      userCollection = "";
    }

    return (
      <div className="App">
        <header>
          <h1>AnimeListr</h1>
        </header>
        <div className="content">
            <h2>Anime catalog:</h2>
            <AnimeList />
            <hr/>
            <h2>User collection:</h2>
            {userCollection}
        </div>
      </div>
    );
  }
}

export default connect(function(state){
  return {
    list: state.shows.collection,
    shows: state.userCollection.shows
  };
})(App);
