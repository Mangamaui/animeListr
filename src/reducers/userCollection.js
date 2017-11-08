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
      const STATUS = setShowStatus(action.progress, action.episodes);
      shows[index] = {...shows[index]};
      shows[index].progress = action.progress;
      shows[index].status = STATUS;
      return {...state, shows: shows};

    default:
      return state;
  }
}

function setShowStatus(progress, episodes) {
  let status = 0;
  if(progress > 0 && progress < episodes) {
    status = 1;
  } else if (progress == episodes) {
    status = 2;
  }
  return status
}
