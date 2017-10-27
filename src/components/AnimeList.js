import React from 'react';
import animeCatalog from '../lib/animeCatalog';

import AnimeShow from './AnimeShow';


class AnimeList extends React.Component {

    

    render() {

        const LIST = animeCatalog.map(function(show){
            return <AnimeShow key={show.id} title={show.title} cover={show.cover} episodes={show.episodes} />;
        });

        return (
            <ul className="animeList">
                {LIST}
            </ul>
        )

    }
}

export default AnimeList;