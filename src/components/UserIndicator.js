import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logout } from '../actions/app';

class UserIndicator extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.toggleSubNav = this.toggleSubNav.bind(this);

    this.state = {
      isActive: false
    }
  }

  render() {
    let classes = "user-indicator__menu sub-nav";
    if (this.state.isActive) {
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
    const STATE = this.state.isActive ? false : true;
    this.setState({isActive: STATE});
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
  };
})(UserIndicator);
