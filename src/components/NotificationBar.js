import React from 'react';

class NotificationBar extends React.Component {
  constructor(props) {
    super(props);

    this.clickHandler = this.clickHandler.bind(this);
    this.state = { isActive: true };
  }

  render () {
    const CLASSLIST = this.setClassList();
    return (
      <div className={CLASSLIST}>
        <i className="icon"></i>
        <p>{this.props.msg}</p>
        <button className="close-btn" onClick={this.clickHandler}><i className="icon-times"></i></button>
      </div>
    );
  }

  setClassList() {
    let classList = "notification-bar";

    if (this.state.isActive) {
      classList += " notification-bar--active";
    }
    classList += ` ${this.props.type}`;

    return classList;
  }

  clickHandler(event) {
    event.preventDefault();
    this.setState({isActive: false});
  }
}

export default NotificationBar;
