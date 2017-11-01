import React from 'react';

import { connect } from 'react-redux';
import AnimeShow from './AnimeShow';


class AnimeList extends React.Component {

  render() {
    const USERCLASS = (this.props.class) ? this.props.class : "";
    const USERID = (this.props.userID) ? this.props.class :  null;

    const LIST = this.props.list.map((show) => {
      let animeShow = null;
      const ITEM = this.findShow(show.id);

      if (USERID && this.props.shows) {
        if (ITEM) {
          animeShow = <AnimeShow key={show.id} id={show.id} title={show.title} cover={show.cover}
          episodes={show.episodes} userCollectionItem={true} progress={ITEM.progress} status={ITEM.status}/>
        };

      } else if (USERID == null){
        const inCollection = ITEM ? true : false;
        animeShow = <AnimeShow key={show.id} id={show.id} title={show.title} cover={show.cover} episodes={show.episodes} inCollection={inCollection} />;
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
    const CHECK = this.props.shows.find(function(item){
      return item.showID === id;
    });
    return CHECK !== undefined ? CHECK : false;
  }

}

export default connect(function(state){
  return {
    list: state.shows.collection,
    shows: state.userCollection.shows
  };
})(AnimeList);
