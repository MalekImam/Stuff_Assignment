// Dependenices
import isValid from 'core/helpers/ValidationHelpers';
import {updateLoginValidation} from './actions/login';

const validationLoginSchema = {
  password: ['required'],
  email: ['required', 'email'],
};

export const validateLoginInput = (target, dispatch) => {
  let validationFlag = true;
  validationLoginSchema[target].forEach((V_Type) => {
    if (!isValid(V_Type, data[target])) {
      validationFlag = false;
      dispatch(updateLoginValidation({[`isValid_${target}`]: false}));
    }
  });
  if (validationFlag) {
    dispatch({[`isValid_${target}`]: true});
  }
};
