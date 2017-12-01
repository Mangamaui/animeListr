import React from 'react';
import { connect } from 'react-redux';
import {
  addShow
} from '../actions/userCollection';


class AnimeShow extends React.Component {
  constructor(props) {
    super(props);

    //bind event handlers
    this.handleAddEvent = this.handleAddEvent.bind(this);
  }

  render() {
    const IMG = "/images/" + this.props.cover;
    const BTNTEXT = (this.props.inCollection) ? "Added" : "Add to collection";
    const DISABLED = (this.props.inCollection);
    const ADDBTN = (<button className="animeShow__add-button" onClick={this.handleAddEvent} disabled={DISABLED} name="addShow">{BTNTEXT}</button>);

    const AUTHENTICATED = this.props.authentication != null;
    const PRINTBTN = AUTHENTICATED ? ADDBTN : "";

    return(
      <li className="animeShow">
        <div className="animeShow__image-wrap">
          <img className="animeShow__image" src={IMG} alt={this.props.title}/>
        </div>
        <p className="animeShow__title">{this.props.title}</p>
        <span className="animeShow__episode-counter">{this.props.episodes} episodes</span>
        {PRINTBTN}
      </li>
    )
  }

  handleAddEvent (event) {
    event.preventDefault();
    let reduxAction = addShow(this.props.id, this.props.authentication);
    this.props.dispatch(reduxAction);
  }

}

export default connect(function(state){
  return {
    authentication: state.app.authenticated
  }
})(AnimeShow);
