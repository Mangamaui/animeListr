import { requestHasErrored, requestIsLoading } from './app';
import { fetchRequest } from '../lib/general';

const URL = 'http://localhost:4000/shows';

export function loadAnimeCatalog() {

  return (dispatch) => {
    dispatch(requestIsLoading(true));

    fetchRequest(URL,'GET', null)
    .then((response) => {
      if(!response.status){
        throw Error(response.statusText);
      }

      dispatch(requestIsLoading(false));
      return response;

    }).then((response) => response.json())
    .then((data) => dispatch({
      type: 'LOAD_CATALOG',
      collection: data
    }))
    .catch(() => dispatch(requestHasErrored(true)));
  }

}
