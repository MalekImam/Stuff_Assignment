import {
  SET_USER_EMAIL,
  SET_USER_PASSWORD,
  UPDATE_VALIDATION,
} from 'modules/Login/helpers/actions/types';

export const setEmail = (email) => ({type: SET_USER_EMAIL, data: email});

export const setPassword = (password) => ({
  data: password,
  type: SET_USER_PASSWORD,
});

export const updateLoginValidation = (validation) => ({
  data: validation,
  type: UPDATE_VALIDATION,
});
