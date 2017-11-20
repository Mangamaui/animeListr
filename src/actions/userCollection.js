import { requestHasErrored, requestIsLoading } from './app';
import { fetchRequest } from '../lib/general';

const URL = 'http://localhost:4000/user_shows';

export function loadUserCollection(token) {
  return (dispatch) => {
    dispatch(requestIsLoading(true));

    fetchRequest(URL,'GET', token)
    .then((response) => {
      if (!response.status) {
        throw Error(response.statusText);
      }

      dispatch(requestIsLoading(false));
      return response;

    }).then((response) => response.json())
    .then((userCollection) => dispatch({
      type: 'LOAD_USERCOLLECTION',
      userCollection: userCollection
    }))
    .catch(() => dispatch(requestHasErrored(true)));
  }
}

export function addShow(show_id, token) {
  let data = JSON.stringify({'show_id': show_id});

  return (dispatch) => {
    dispatch(requestIsLoading(true));

    fetchRequest(URL, 'POST',token, data)
    .then((response) => {
      if (!response.status) {
        throw Error(response.statusText);
      }

      dispatch(requestIsLoading(false));
      return response;

    }).then((response) => response.json())
    .then((userShow) => dispatch({
      type: 'ADD_SHOW',
      userShow: userShow
    }))
    .catch(() => dispatch(requestHasErrored(true)));
  }
}

export function removeShow(id, token) {
  let customURL = URL + `/${id}`;

  return (dispatch) => {
    dispatch(requestIsLoading(true));

    dispatch({
      type: 'REMOVE_SHOW',
      id: id
    });

    fetchRequest(customURL, 'DELETE',token)
    .then((response) => {
      if (!response.status) {
        throw Error(response.statusText);
      }

      dispatch(requestIsLoading(false));
      return response;

    }).catch(() => dispatch(requestHasErrored(true)));

  }

}

export function updateShowStatus(id, token, status) {
  let customURL = URL + `/${id}`;

  let data = JSON.stringify({'status': status });

  return (dispatch) => {
    dispatch(requestIsLoading(true));

    fetchRequest(customURL, 'PUT',token, data)
    .then((response) => {
      if (!response.status) {
        throw Error(response.statusText);
      }

      dispatch(requestIsLoading(false));
      return response;

    }).then((response) => response.json())
    .then((userShow) => dispatch({
      type: 'UPDATE_SHOW',
      userShow: userShow
    }))
    .catch(() => dispatch(requestHasErrored(true)));
  }
}

export function updateShowProgress(id, token, progress, episodes) {
  progress = parseInt(progress, 10);

  let customURL = URL + `/${id}`;
  const STATUS = setShowStatus(progress, episodes);

  let data = JSON.stringify({'status': STATUS, 'progress': progress });

  return (dispatch) => {
    dispatch(requestIsLoading(true));

    fetchRequest(customURL, 'PUT',token, data).then((response) => {
      if (!response.status) {
        throw Error(response.statusText);
      }

      dispatch(requestIsLoading(false));
      return response;

    }).then((response) => response.json())
    .then((userShow) => dispatch({
      type: 'UPDATE_SHOW',
      userShow: userShow
    }))
    .catch(() => dispatch(requestHasErrored(true)));
  }
}

function setShowStatus(progress, episodes) {
  let status = 0;

  if (progress > 0 && progress < episodes) {
    status = 1;
  } else if (progress === episodes) {
    status = 2;
  }
  return status
}
