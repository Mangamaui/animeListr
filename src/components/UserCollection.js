import React from 'react';

import AnimeList from '../containers/AnimeList';

const UserCollection = () => (
  <React.Fragment>
    <h2 key={'oe1'}>Your collection</h2>
    <AnimeList key={'oe2'} class="userCollection" />
  </React.Fragment>
)

export default UserCollection;
