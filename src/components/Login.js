import React from 'react';

import UserForm from '../containers/UserForm';

class Login extends React.Component {
  render() {
    return <UserForm signup={false}/> ;
  }
}

export default Login;
