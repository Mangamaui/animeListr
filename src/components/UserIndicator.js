import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logout } from '../actions/app';

class UserIndicator extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    return (
      <li className="user-indicator">
        <span className="user-indicator__username">{this.props.userName} <i className="icon icon-sort-down"></i></span>
          <ul className="user-indicator__menu sub-nav">
            <li><NavLink to="/userCollection">personal collection</NavLink></li>
            <li><a onClick={this.handleClick}>logout</a></li>
          </ul>
      </li>
    );
  }

  handleClick(event) {
    event.preventDefault();
    let reduxAction = logout();

    this.props.dispatch(reduxAction);
  }
}
export default connect()(UserIndicator);
