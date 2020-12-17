import {LOGIN_ERROR, LOGIN_SUCCESS, LOGOUT} from 'core/redux/actions/types';

const initialState = {
  authError: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_ERROR:
      console.log('Login Error');
      return {...state, authError: 'Login Failed'};
    case LOGIN_SUCCESS:
      console.log('Login success');
      return {...state, authError: null};
    case LOGOUT:
      return {...state, user: null, userToken: null};
    default:
      return state;
  }
};

export default userReducer;
