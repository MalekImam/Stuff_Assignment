import {
  SET_R_USER_EMAIL,
  UPDATE_R_VALIDATION,
  SET_R_USER_PASSWORD,
  SET_USER_C_PASSWORD,
} from 'modules/SignUp/helpers/actions/types';

export const setREmail = (email) => ({type: SET_R_USER_EMAIL, data: email});

export const setRPassword = (password) => ({
  data: password,
  type: SET_R_USER_PASSWORD,
});
export const setRC_Password = (password) => ({
  data: password,
  type: SET_USER_C_PASSWORD,
});

export const updateSignUpValidation = (validation) => ({
  data: validation,
  type: UPDATE_R_VALIDATION,
});
