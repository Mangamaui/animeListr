let nextID = 0;


export function addShow(showID){
    return {
        type: 'ADD_SHOW',
        id: nextID++,
        showID: showID
    }
}

export function removeShow(showID) {
    return {
        type: 'REMOVE_SHOW',
        showID: showID
    }
}

export function updateShowStatus(showID, status) {
  console.log(showID, status);
  return {
    type: 'UPDATE_SHOW_STATUS',
    showID: showID,
    status: status
  }
}

export function updateShowProgress(showID, progress, episodes) {
  return {
    type: 'UPDATE_SHOW_PROGRESS',
    showID: showID,
    progress: progress,
    episodes: episodes
  }
}
