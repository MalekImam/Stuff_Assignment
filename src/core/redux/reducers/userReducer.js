import {LOGIN, LOGOUT} from 'core/redux/actions/types';

const initialState = {
  user: null,
  isLoading: true,
  userToken: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      const user = action.data.user;
      const userToken = action.data.token;
      return {...state, isLoading: false, user, userToken};
    case LOGOUT:
      return {...state, user: null, userToken: null};
    default:
      return initialState;
  }
};

export default userReducer;
