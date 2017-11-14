import { requestHasErrored, requestIsLoading } from './app';
import { fetchGet } from '../lib/general';


export function loadAnimeCatalog() {

  return (dispatch) => {
    dispatch(requestIsLoading(true));

    fetchGet('http://localhost:4000/shows')
    .then((response) => {
      if(!response.status){
        throw Error(response.statusText);
      }
      console.log(response);
      dispatch(requestIsLoading(false));

      return response;
    }).then((response) => response.json())
    .then((data) => dispatch({
      type: "LOAD_CATALOG",
      collection: data
    }))
    .catch(() => dispatch(requestHasErrored(true)));
  }

}
