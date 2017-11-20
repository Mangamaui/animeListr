const initialState = {
  shows: []
}

export default function userCollection(state = initialState, action) {
  let shows, index = null;

  switch(action.type) {
    case 'LOAD_USERCOLLECTION':

      shows = [...action.userCollection];
      //console.table(shows);
      return {...state, shows: shows};

    case 'ADD_SHOW':
      shows = [...state.shows];
      const userShow = action.userShow;


      const item = {
        id: userShow.id,
        show_id: userShow.show_id,
        progress: userShow.progress,
        status: userShow.status
      };
      shows.push(item);
      return {...state, shows: shows};

    case 'REMOVE_SHOW':
      shows = [...state.shows];
      shows = shows.filter(function(show) {
        return show.id !== action.id;
      });
      return {...state, shows: shows};

    case 'UPDATE_SHOW':
      shows = [...state.shows];
      index = shows.findIndex(function(show) {
        return show.id === action.userShow.id;
      });

      shows[index] = action.userShow;
      return {...state, shows: shows};

    default:
      return state;
  }
}
