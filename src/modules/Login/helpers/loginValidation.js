// Dependenices
import isValid from 'core/helpers/ValidationHelpers';
import {updateLoginValidation} from './actions/login';

const validationLoginSchema = {
  password: ['required'],
  email: ['required', 'email'],
};

export const validateLoginInput = (target, dispatch, data) => {
  let validationFlag = true;
  validationLoginSchema[target].forEach((V_Type) => {
    if (!isValid(V_Type, data)) {
      validationFlag = false;
      dispatch(updateLoginValidation({[`isValid_${target}`]: false}));
    }
  });
  if (validationFlag) {
    dispatch(updateLoginValidation({[`isValid_${target}`]: true}));
  }
};
