import React from 'react';

class UserIndicator extends React.Component {

  render() {
    return (
      <div className="user-indicator">
        <div className="user-indicator__username">{this.props.userName} <i className="icon icon-chevron-right"></i></div>
        <nav className="user-indicator__menu">
          <ul>
            <li><a>profile</a></li>
            <li><a>logout</a></li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default UserIndicator;
