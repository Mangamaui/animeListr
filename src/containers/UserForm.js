import React from 'react';

import { connect } from 'react-redux';
import {
  signup,
  login
} from '../actions/app';

class UserForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    const SIGNUP = this.props.signup;

    const FORMTEXT =  SIGNUP ? "signup": "login";
    const FORMCLASS = `user-form form ${FORMTEXT}`;

    let userNameField = (<label>Username:
            <input type="text" name="username" className="login-form__input form__input" required={true} onChange={this.handleInputChange}  />
            </label>);

    return (
      <div className="form-wrap">
        <form className={FORMCLASS} onSubmit={this.handleSubmit}>
          <h2>{FORMTEXT}</h2>
          { (SIGNUP)?userNameField:""}
          <label>Email:<br/>
            <input type="email" name="email" className="login-form__input form__input" placeholder="mugen@samuraichamploo.com" required={true} onChange={this.handleInputChange} />
          </label>
          <label>Password:<br/>
            <input type="password" name="password" className="login-form__input form__input" required={true} onChange={this.handleInputChange}  />
          </label>
          <button className="user-form__btn form-btn">{FORMTEXT}</button>
        </form>
      </div>
    );
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    let reduxAction = null;

    if(this.props.signup) {
      reduxAction = signup(this.state.email, this.state.password, this.state.username);
    }
    if(!this.props.signup) {
      reduxAction = login(this.state.email, this.state.password);
    }

    this.props.dispatch(reduxAction);

    this.clearFields();
  }

  clearFields() {
    const FIELDS = document.querySelectorAll('input');
    FIELDS.forEach(field => {
      field.value = "";
    });
  }
}

export default connect()(UserForm);
