import React from 'react';
import { connect } from 'react-redux';
import { isTokenExpired } from './lib/general';

import { logout} from './actions/app';
import { loadAnimeCatalog } from './actions/shows';
import { loadUserCollection } from './actions/userCollection';

import Header from './components/Header';


class App extends React.Component {
  constructor(props) {
    super(props);
    props.dispatch(loadAnimeCatalog());
  }

  componentDidMount() {
    const TOKEN = this.props.authenticated;

    if (isTokenExpired(TOKEN)) {
      this.props.dispatch(logout());

    } else {
      this.getUserCollection();
    }
  }

  render() {

    return (
      <div className="App">
        <Header authenticated={this.props.authenticated} userName={this.props.userName}/>
        <main className="content">

        {this.props.isLoading &&
          <p>THIS IS LOADING...</p>
        }

          {this.props.children}

        </main>
        <footer>Made by Mangamaui</footer>
      </div>
    );
  }

  getUserCollection() {
   if (this.props.authenticated) {
     this.props.dispatch(loadUserCollection(this.props.authenticated));
   }
  }

}


export default connect(function(state){
  return {
    location: state.router.location,
    list: state.shows.collection,
    shows: state.userCollection.shows,
    authenticated: state.app.authenticated,
    userName: state.app.user,
    isLoading: state.app.isLoading
  };
})(App);
