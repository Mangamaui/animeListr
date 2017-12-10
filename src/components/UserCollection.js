import React from 'react';
import { connect } from 'react-redux';
import AnimeList from '../containers/AnimeList';

class UserCollection extends React.Component {

  render() {
    return ([
        <h2 key={'oe1'}>Your collection</h2>,
        <AnimeList key={'oe2'} class="userCollection" />

    ])
  }
}

export default connect() (UserCollection);
