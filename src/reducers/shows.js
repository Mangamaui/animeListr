import animeCatalog from '../lib/animeCatalog';

const initialState = {
    collection: animeCatalog
}

export default function shows(state = initialState, action) {

    switch(action.type) {
      
        default:
            return state;

    }
}
