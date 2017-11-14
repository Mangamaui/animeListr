import animeCatalog from '../lib/animeCatalog';

const initialState = {
    collection: []
}

export default function shows(state = initialState, action) {
    let collection = null;

    switch(action.type) {
      case 'LOAD_CATALOG':
        collection = action.collection;
      return {...state, collection};

      default:
        return state;

    }
}
