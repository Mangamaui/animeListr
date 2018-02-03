import React from 'react';
import { connect } from 'react-redux';

import AnimeShow from './AnimeShow';
import UserShow from './UserShow';


class AnimeList extends React.Component {


  render() {
    const USERCLASS = (this.props.class) ? this.props.class : null;
    const AUTH = this.props.user.authenticated;

    const LIST = this.props.list.map((show) => {
      let animeShow = null;
      const ITEM = this.findShow(show.id);

      //if the component has the userClass it's a userCollection
      if ((USERCLASS != null) && this.props.shows) {

        if (ITEM) {

          animeShow = <UserShow key={"UC"+ITEM.id} id={ITEM.id} title={show.title} cover={show.cover}
          episodes={show.episodes} userCollectionItem={true} progress={ITEM.progress} status={ITEM.status}/>
        };
        // an AnimeList component without userClass represents the animeCatalog
      } else if (USERCLASS == null) {
        const inCollection = ITEM ? true : false;
        animeShow = <AnimeShow key={show.id} id={show.id} title={show.title} cover={show.cover} episodes={show.episodes} inCollection={inCollection} authentication={AUTH}/>;
      }

      return animeShow;
    });

    return (
      <ul className={"animeList " + USERCLASS}>
      {LIST}
      </ul>
    )
  }

  findShow(id) {
    const CHECK = this.props.shows.find(function(item) {
      return item.show_id === id;
    });
    return CHECK !== undefined ? CHECK : false;
  }

}

export default connect(function(state) {
  return {
    list: state.shows.collection,
    shows: state.userCollection.shows,
    user: state.app
  };
})(AnimeList);
