import React from 'react';
import { connect } from 'react-redux';
import { isTokenExpired } from './lib/general';

import { logout, subnavStatus } from './actions/app';
import { loadAnimeCatalog } from './actions/shows';
import { loadUserCollection } from './actions/userCollection';


import Header from './components/Header';

class App extends React.Component {
  constructor(props) {
    super(props);
    props.dispatch(loadAnimeCatalog());

    this.closeSubNav = this.closeSubNav.bind(this);
  }

  componentDidMount() {
    const TOKEN = this.props.authenticated;

    if (isTokenExpired(TOKEN)) {
      this.props.dispatch(logout());

    } else {
      this.fetchUserCollection();
    }
  }

  render() {
    const VIEW = "App " + this.viewClass() +"View";

    /*         {this.props.isLoading &&
              <div className="loader"><p>THIS IS LOADING...</p></div>
            }
    */

    return (
      <div className={VIEW} onClick={this.closeSubNav}>
        <Header authenticated={this.props.authenticated} userName={this.props.userName}/>
        <main className="content">



          {this.props.children}

          <div className="push"></div>
        </main>
        <footer><p>made by <a href="http://mangamaui.com" target="_blank" rel="noreferrer noopener">Mangamaui</a></p></footer>
      </div>
    );
  }

  fetchUserCollection() {
   if (this.props.authenticated) {
     this.props.dispatch(loadUserCollection());
   }
  }

  viewClass() {
    let location = this.props.location.pathname;
    if(location.length > 1) {
      return location.substring(1);
    }

    return "";
  }

  closeSubNav(event) {

    if(this.props.subnavState) {
      let reduxAction = subnavStatus(false);
      this.props.dispatch(reduxAction);
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
    isLoading: state.app.isLoading,
    subnavState: state.app.subnavState
  };
})(App);
