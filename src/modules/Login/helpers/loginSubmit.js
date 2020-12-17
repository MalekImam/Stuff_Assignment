// Core Files
import {logUserIn} from 'core/redux/actions/auth';

const onSubmit = (loginState, dispatch) => {
  // Sign In
  dispatch(logUserIn(loginState));
};

export default onSubmit;
