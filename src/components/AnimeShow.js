import React from 'react';

class AnimeShow extends React.Component {
    
    render() {
        const IMG = "/images/" + this.props.cover;

        return (
            <li className="animeShow">
                <img src={IMG} alt={this.props.title}/>
                <p className="animeShow__title">{this.props.title}</p>
                <div className="episode-counter">
                    <span className="episode-counter__progress">0</span>|
                    <span className="episode-counter__total">{this.props.episodes}</span>
                </div>
            </li>
        )
    }
}

export default AnimeShow;