import React from 'react';

import { connect } from 'react-redux';
import {
  addShow,
  removeShow,
  updateShowStatus,
  updateShowProgress
} from '../actions/userCollection';

class AnimeShow extends React.Component {
  constructor(props) {
    super(props);

    //bind event handlers
    this.handleAddEvent = this.handleAddEvent.bind(this);
    this.handleRemoveEvent = this.handleRemoveEvent.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  render() {
    const TEMPLATE = this.getTemplate();

    return (TEMPLATE)
  }

  handleAddEvent (event) {
    event.preventDefault();
    let reduxAction = addShow(this.props.id);
    this.props.dispatch(reduxAction);
  }

  handleRemoveEvent (event){
    event.preventDefault();
    let reduxAction = removeShow(this.props.id);
    this.props.dispatch(reduxAction);
  }

  handleSelect(event) {
    event.preventDefault();
    let reduxAction = updateShowStatus(this.props.id, event.target.value);
    this.props.dispatch(reduxAction);
  }

  handleChange(event) {
    event.preventDefault();
    let reduxAction = updateShowProgress(this.props.id, event.target.value);
    this.props.dispatch(reduxAction);
  }

  getTemplate() {
    let template = null;
    let userCollectionItem = this.props.userCollectionItem;
    const IMG = "/images/" + this.props.cover;

    if (userCollectionItem) {
      template  = (
        <li className="animeShow userCollection__Item"  >
          <div className="animeShow__image-wrap">
            <img className="animeShow__image" src={IMG} alt={this.props.title}/>
          </div>
          <p className="animeShow__title">{this.props.title}</p>
          <div className="counter">
          <span className="animeShow__episode-counter">
            <input className="animeShow__episode-progress" type="number" defaultValue="0" steps="1" min="0" max={this.props.episodes} onChange={this.handleChange} />
            {this.props.episodes}</span>
            </div>
          <select value={this.props.state} onChange={this.handleSelect}>
            <option value="0">Planning to watch</option>
            <option value="1">Watching</option>
            <option value="2">Completed</option>
          </select>
          <button className="animeShow__delete-button" onClick={this.handleRemoveEvent} name="removeShow">Remove show</button>
        </li>
      )

    } else {
      const BTNTEXT = (this.props.inCollection) ? "Added" : "Add to collection";
      const DISABLED = (this.props.inCollection);
      template = (
        <li className="animeShow">
          <div className="animeShow__image-wrap">
            <img className="animeShow__image" src={IMG} alt={this.props.title}/>
          </div>
          <p className="animeShow__title">{this.props.title}</p>
          <span className="animeShow__episode-counter">{this.props.episodes} episodes</span>
          <button className="animeShow__add-button" onClick={this.handleAddEvent} disabled={DISABLED} name="addShow">{BTNTEXT}</button>
        </li>
      )
    }
    return template;

  }
}

export default connect()(AnimeShow);
