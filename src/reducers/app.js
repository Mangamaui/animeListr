const initialState = {
  authenticated: null,
  user: null,
  isLoading: null,
  subnavState: false
}

function app(state = initialState, action) {
  let auth, user, isLoading = null;
  let subnavState = false;

  switch(action.type) {
    case 'SIGNUP':
      auth = action.user.token;
      user = action.user.user;
      return {...state, authenticated: auth, user: user};

    case 'LOGIN':
      auth = action.user.token;
      user = action.user.user;
      return {...state, authenticated: auth, user: user};

    case 'LOGOUT':
      auth = null;
      user = null;
      return {...state, authenticated: auth, user: user};

    case 'REQUEST_HAS_ERRORED':

      return state;

    case 'REQUEST_IS_LOADING':
      isLoading = action.isLoading;
      return {...state, isLoading};

    case 'SUBNAV_STATUS':
      subnavState = action.subnavState;
      return {...state, subnavState};

    default:
      return state;
  }
}

export default app;
