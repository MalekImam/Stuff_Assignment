// Dependenices
import isValid from 'core/helpers/ValidationHelpers';
import {updateSignUpValidation} from 'modules/SignUp/helpers/actions/signUp';

const validationSignUpSchema = {
  password: ['required'],
  c_password: ['required'],
  email: ['required', 'email'],
};

export const validateSignUpInput = (target, dispatch, data) => {
  let validationFlag = true;
  validationSignUpSchema[target].forEach((V_Type) => {
    if (!isValid(V_Type, data)) {
      validationFlag = false;
      dispatch(updateSignUpValidation({[`isValid_${target}`]: false}));
    }
  });
  if (validationFlag) {
    dispatch(updateSignUpValidation({[`isValid_${target}`]: true}));
  }
};
