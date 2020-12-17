import {
  SET_R_USER_EMAIL,
  UPDATE_R_VALIDATION,
  SET_R_USER_PASSWORD,
  SET_USER_C_PASSWORD,
} from 'modules/Login/helpers/actions/types';

export const initialSignUpState = {
  email: '',
  password: '',
  c_password: '',
  isValid_email: true,
  isValid_password: true,
  isValid_c_password: true,
};

const signUpReducer = (state = initialSignUpState, action) => {
  switch (action.type) {
    case SET_R_USER_EMAIL:
      return {...state, email: action.data};
    case SET_R_USER_PASSWORD:
      return {...state, password: action.data};
    case SET_USER_C_PASSWORD:
      return {...state, password: action.data};
    case UPDATE_R_VALIDATION:
      return {...state, ...action.data};
    default:
      return state;
  }
};

export default signUpReducer;
