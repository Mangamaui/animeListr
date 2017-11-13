import React from 'react';

import AnimeList from './components/AnimeList';
import UserForm from './components/UserForm';

import { connect } from 'react-redux';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      signup: false
    }

    this.switchForms = this.switchForms.bind(this);
  }

  render() {
    const AUTHENTICATED = this.props.authenticated != null;

    let userCollection =  null;
    if(this.props.shows.length > 0 &&  AUTHENTICATED) {
      userCollection = <AnimeList class="userCollection" />
    } else {
      userCollection = "";
    }

    return (
      <div className="App">
        <header>
          <div className="user-form-wrap">
          <button className="form-switch" onClick={this.switchForms}>Create account</button>
            <UserForm signup={this.state.signup}/>
          </div>
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

  switchForms() {
    const SIGNUP = !this.state.signup ? true : false;
    this.setState({signup: SIGNUP});
    console.log(this.state.signup);
  }
}

export default connect(function(state){
  return {
    list: state.shows.collection,
    shows: state.userCollection.shows,
    authenticated: state.app.authenticated
  };
})(App);
