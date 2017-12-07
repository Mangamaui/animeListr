import jwtDecode from 'jwt-decode';

function status(response) {
  if (response.status >= 200 && response.status < 300) {
    return Promise.resolve(response)
  } else {
    return Promise.reject(new Error(response.statusText))
  }
}

function json(response) {
  return response.json()
}

export function fetchPost(url, body) {
  return fetch(url, {
    method: 'POST',
    headers: new Headers({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }),
    body: body
  }).then(status)
  .then(json)
  .then(function(data) {
    return data;
  }).catch(function(error) {
    console.log('Request failed', error);
    return error;
  });
}

export function fetchRequest(url, method, token, data = null) {

  const REQUESTHEADER = setHeader(token);

  return fetch(url, {
    method: method,
    headers: new Headers(
      REQUESTHEADER
    ),
    body: data
  })

}

function setHeader(token) {
  let header = null;

  if (token != null) {
    const newToken = `Bearer ${token}`;

    header = {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': newToken
    };
  } else {
    header = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    };
  }

  return header;

}

function getToken() {
  const STATE = localStorage.getItem("state");
  const APP = JSON.parse(STATE).app;

  return APP.authenticated;
}

export function requireAuth() {
  const token = getToken();

  return !!token && !isTokenExpired(token);
}

export function isTokenExpired(token) {

  if (token) {
    const decodedToken = jwtDecode(token).exp;
    const date = new Date(0);
    const expirationDate = date.setUTCSeconds(decodedToken);

    return expirationDate < new Date();
  } else {
    return null;
  }

}
