import {fetchPost, authenticatedFetch} from '../lib/general';

export function signup(email, password, username) {
  let data = JSON.stringify({ 'email': email, 'password': password,'user_name': username });
  let token = null;

  return(dispatch) => {
    fetchPost('http://localhost:4000/users', data)
    .then( response => {
      console.log(response);

      if(response.jwt) {
        token = response.jwt;
        authenticatedFetch('http://localhost:4000/users/info',token)
        .then((userName) => {
          const user = {...userName,token: token};
          dispatch({
            type: 'SIGNUP',
            user: user
          });

        });

      } else {
        //show error
      }

    });
  }
}

export function login(email, password) {
  let data = JSON.stringify({ "auth": {'email': email, 'password': password}});
  let token = null;

  return (dispatch) => {
    fetchPost('http://localhost:4000/users/token', data)
    .then((response) => {
      console.log(response);

      if(response.jwt) {
        token = response.jwt;
        console.log(token);
        authenticatedFetch('http://localhost:4000/users/info',token).then((userName) => {
          const user = {...userName,token: token};
          console.log(user);
          dispatch({
            type: 'LOGIN',
            user: user
          });
        });
      } else {
        //dispatch error
      }
    });
  }

}

export function logout() {
  return {
    type: 'LOGOUT'
  }
}
