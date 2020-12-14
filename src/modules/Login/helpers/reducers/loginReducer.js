import {
  SET_USER_EMAIL,
  SET_USER_PASSWORD,
  UPDATE_VALIDATION,
} from 'modules/Login/helpers/actions/types';

export const initialLoginState = {
  email: '',
  password: '',
  isValid_email: true,
  isValid_password: true,
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_EMAIL:
      return {...state, email: action.data};
    case SET_USER_PASSWORD:
      return {...state, password: action.data};
    case UPDATE_VALIDATION:
      return {...state, ...action.data};
    default:
      return state;
  }
};

export default loginReducer;
