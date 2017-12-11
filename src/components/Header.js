import React from 'react';
import { NavLink } from 'react-router-dom';

import UserIndicator from './UserIndicator';

class Header extends React.Component {

  render() {
    const menuLinks = this.setMenuLinks();

    return (
      <header>
        <h1>AnimeListr</h1>

        <div className="menu-wrap">
          {menuLinks}
        </div>
      </header>
    )
  }

  setMenuLinks () {
    const userIndicator = this.setUserIndicator();

    if (!this.props.authenticated) {
      return (
          <nav className="main-nav">
            <ul>
              <li><NavLink exact to="/">home</NavLink></li>
              <li><NavLink to="/login">login</NavLink></li>
              <li><NavLink to="/signup" role="button">create account</NavLink></li>
            </ul>
          </nav>
        );
    }

    return (
      <nav className="main-nav">
        <ul>
          <li><NavLink exact to="/">Home</NavLink></li>
          {userIndicator}
        </ul>
      </nav>
    );
  }

  setUserIndicator() {
    if(this.props.authenticated) {
      return <UserIndicator userName={this.props.userName} />;
    }

    return null;
  }
}

export default Header;
