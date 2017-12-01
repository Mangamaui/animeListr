import React from 'react';

import UserForm from '../containers/UserForm';

class Signup extends React.Component {
  render() {
    return <UserForm signup={true}/> ;
  }
}

export default Signup;
