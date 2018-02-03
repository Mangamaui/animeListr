import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logout, subnavStatus } from '../actions/app';

class UserIndicator extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.toggleSubNav = this.toggleSubNav.bind(this);

  }

  render() {
    let classes = "user-indicator__menu sub-nav";
    if (this.props.subnavState) {
      classes += " active";
    }

    return (
      <li className="user-indicator">
        <span className="user-indicator__username" onClick={this.toggleSubNav}>{this.props.userName} <i className="icon icon-sort-down"></i></span>
          <ul className={classes}>
            <li><NavLink exact to="/userCollection">personal collection</NavLink></li>
            <li><a onClick={this.handleClick}>logout</a></li>
          </ul>
      </li>
    );
  }

  toggleSubNav(event) {
    event.preventDefault();

    const STATE = this.props.subnavState ? false : true;

    let reduxAction = subnavStatus(STATE);
    this.setState({subnavState: STATE});
    this.props.dispatch(reduxAction);
  }

  handleClick(event) {
    event.preventDefault();
    let reduxAction = logout();

    this.props.dispatch(reduxAction);
  }
}

export default connect(function(state){
  return {
    location: state.router.location,
    subnavState: state.app.subnavState
  };
})(UserIndicator);
