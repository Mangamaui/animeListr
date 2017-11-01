const initialState = {
  shows: []
}

export default function userCollection(state = initialState, action) {
  let shows, index = null;

  switch(action.type) {
    case 'ADD_SHOW':
      shows = [...state.shows];
      const item = {
        showID: action.showID,
        progress: 0,
        status: 0
      };
      shows.push(item);
      return {...state, shows: shows};

    case 'REMOVE_SHOW':
      shows = [...state.shows];
      shows = shows.filter(function(show) {
        return show.showID !== action.showID;
      });
      return {...state, shows: shows};

    case 'UPDATE_SHOW_STATUS':
      shows = [...state.shows];
      index = shows.findIndex(function(show) {
        return show.showID === action.showID;
      });
      shows[index].status = action.status;
      return {...state, shows: shows};

    case 'UPDATE_SHOW_PROGRESS':
      shows = [...state.shows];
      index = shows.findIndex(function(show) {
        return show.showID === action.showID;
      });
      shows[index].progress = action.progress;
      return {...state, shows: shows};

    default:
      return state;
  }
}
