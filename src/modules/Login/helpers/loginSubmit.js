// Core Files
import {logUserIn} from 'core/redux/actions/auth';

const onSubmit = (loginState, navigation, dispatch) => {
  // Sign In
  dispatch(logUserIn(loginState));
  navigation.navigate('Home');
};

export default onSubmit;
