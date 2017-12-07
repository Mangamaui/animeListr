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
    const BTNICON = (this.props.inCollection) ? "tick" : "plus";
    const CLASSES = `icon icon-${BTNICON}`;
    const DISABLED = (this.props.inCollection);
    const ADDBTN = (<button className="action-btn add-btn " onClick={this.handleAddEvent} disabled={DISABLED} name="addShow"><i className={CLASSES}></i></button>);

    const AUTHENTICATED = this.props.authentication != null;
    const PRINTBTN = AUTHENTICATED ? ADDBTN : "";

    return(
      <li className="show-card animeShow">
        <div className="show-card__image-wrap">
          <img className="show-card__image" src={IMG} alt={this.props.title}/>
          {PRINTBTN}
        </div>
        <span className="show-card__info">
          <p className="show-card_title">{this.props.title}</p>
          <span className="show-card__episode-counter">{this.props.episodes} episodes</span>
        </span>
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
