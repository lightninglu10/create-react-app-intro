/***
 * Action / Reducer file to tell us where we are in the app
 * 
 */

/**********************************
 *        ACTIONS SECTION         *
 **********************************/

const AuthConstants = {
  LOGIN: 'LOGIN',
}

export const ExampleActions = {
  login: () => {
    return dispatch => {
      dispatch({
        type: AuthConstants.LOGIN,
        isLoggedIn: true,
      })
    }
  },
}

 /*********************************
 *        REDUCER SECTION         *
 **********************************/

const defaultAuthState = {
  isLoggedIn: false,
  account: {
    username: '',
  }
}

const AuthReducer = (state = defaultAuthState, action) => {
  switch(action.type) {
    case AuthConstants.LOGIN:
    return {
      ...state,
      ...action
    }
    default:
      return state;
  }
}

export default AuthReducer;