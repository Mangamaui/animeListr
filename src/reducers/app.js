const initialState = {
  authenticated: null,
  user: null
}

function app(state = initialState, action) {
  let auth, user = null;

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

    return state;

    default:
        return state;
  }
}

export default app;
