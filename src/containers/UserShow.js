import React from 'react';
import { connect } from 'react-redux';
import {
  removeShow,
  updateShowStatus,
  updateShowProgress
} from '../actions/userCollection';

class UserShow extends React.Component {
  constructor(props) {
    super(props);

    //bind event handlers
    this.handleRemoveEvent = this.handleRemoveEvent.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  render() {
    const IMG = "/images/" + this.props.cover;
    const DISABLED = this.setSelectState();

    return(
      <li className="animeShow userCollection__item">
        <div className="animeShow__image-wrap">
          <img className="animeShow__image" src={IMG} alt={this.props.title}/>
        </div>
        <p className="animeShow__title">{this.props.title}</p>
        <div className="counter">
          <span className="animeShow__episode-counter">
            <input className="animeShow__episode-progress" type="number" defaultValue={this.props.progress} steps="1" min="0" max={this.props.episodes} onChange={this.handleChange} />
          / {this.props.episodes}</span>
        </div>

        <div className="select-wrap">
          <select value={this.props.status} onChange={this.handleSelect} disabled={DISABLED}>
            <option value="0">Planning to watch</option>
            <option value="1">Watching</option>
            <option value="2">Completed</option>
          </select>
        </div>
        <div className="btn-wrap">
          <button className="action-btn animeShow__delete-button" onClick={this.handleRemoveEvent} name="removeShow"><span>Remove show</span><i className="icon icon-minus-circle"></i></button>
        </div>
      </li>
    )
  }

  handleRemoveEvent(event) {
    event.preventDefault();
    let reduxAction = removeShow(this.props.id, this.props.authentication);
    this.props.dispatch(reduxAction);
  }

  handleSelect(event) {
    event.preventDefault();
    let reduxAction = updateShowStatus(this.props.id, this.props.authentication,event.target.value);
    this.props.dispatch(reduxAction);
  }

  handleChange(event) {
    event.preventDefault();
    let reduxAction = updateShowProgress(this.props.id, this.props.authentication, event.target.value, this.props.episodes);
    this.props.dispatch(reduxAction);
  }

  setSelectState() {
    let selectState = false;
    if (this.props.status === 2 && this.props.progress === this.props.episodes) {
      selectState = true;
    }
    return selectState;
  }
}

export default connect(function(state) {
  return {
    authentication: state.app.authenticated
  }
})(UserShow);
