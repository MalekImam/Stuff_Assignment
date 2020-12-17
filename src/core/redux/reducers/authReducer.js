import {
  LOGIN_ERROR,
  LOGOUT_ERROR,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
} from 'core/redux/actions/types';

const initialState = {authError: null};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_ERROR:
      console.log('Login Error');
      return {...state, authError: 'Login Failed'};
    case LOGIN_SUCCESS:
      console.log('Login success');
      return {...state, authError: null};
    case LOGOUT_ERROR:
      console.log('Logout failed');
      return state;
    case LOGOUT_SUCCESS:
      console.log('Logout success');
      return state;
    default:
      return state;
  }
};

export default userReducer;
