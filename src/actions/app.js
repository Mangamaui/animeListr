import { fetchPost, fetchRequest } from '../lib/general';

const URL = 'http://localhost:4000/users';

export function signup(email, password, username) {
  let data = JSON.stringify({ 'email': email, 'password': password,'user_name': username });
  let token = null;

  return(dispatch) => {

    fetchPost(URL, data)
    .then( response => {

      if (response.jwt) {
        token = response.jwt;
        let customURL = `${URL}/info`;

        fetchRequest(customURL, 'GET', token)
        .then((response) => {
          if (!response.status) {
            throw Error(response.statusText);
          }

          dispatch(requestIsLoading(false));
          return response;

        }).then((response) => response.json())
        .then((userName) => {
          const user = {...userName,token: token};
          dispatch({
            type: 'SIGNUP',
            user: user
          });
        })
        .catch(() => dispatch(requestHasErrored(true)));

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

      if (response.jwt) {
        token = response.jwt;
        let customURL = `${URL}/info`;

        fetchRequest(customURL, 'GET', token)
        .then((response) => {
          if (!response.status) {
            throw Error(response.statusText);
          }

          dispatch(requestIsLoading(false));
          return response;

        }).then((response) => response.json())
        .then((userName) => {
          const user = {...userName,token: token};
          dispatch({
            type: 'LOGIN',
            user: user
          });
        })
        .catch(() => dispatch(requestHasErrored(true)));

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

export function requestHasErrored(bool) {
  return {
    type: 'REQUEST_HAS_ERRORED',
    hasErrored: bool
  };
}

export function requestIsLoading(bool) {
  return {
    type: 'REQUEST_IS_LOADING',
    isLoading: bool
  };
}
