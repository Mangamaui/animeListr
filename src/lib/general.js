function status(response) {
  //console.log("ok ", response.ok);
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
    //console.log('Request succeeded with JSON response', data);
    return data;
  }).catch(function(error) {
    console.log('Request failed', error);
    return error;
  });
}

export function authenticatedFetch(url, token) {
  const newToken = `Bearer ${token}`;

  return fetch(url, {
    method: 'GET',
    headers: new Headers({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': newToken
    })
  }).then(status)
  .then(json)
  .then(function(data) {
    console.log('Request succeeded with JSON response', data);
    return data;
  }).catch(function(error) {
    console.log('Request failed', error);
    return error;
  });
}

export function fetchGet(url,body) {
  fetch(url, {
    method: 'GET',
    headers: new Headers({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }),
    body: body
  }).then(status)
  .then(json)
  .then(function(data) {
    console.log('Request succeeded with JSON response', data);
    return data;
  }).catch(function(error) {
    console.log('Request failed', error);
    return error;
  });

}
