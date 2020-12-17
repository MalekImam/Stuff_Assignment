import {LOGIN_SUCCESS, LOGIN_ERROR, LOGOUT} from 'core/redux/actions/types';

export const logUserOut = () => ({type: LOGOUT});

export const logUserIn = (userData) => {
  return (dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase();
    firebase
      .auth()
      .signInWithEmailAndPassword(userData.email, userData.password)
      .then(() => {
        dispatch({type: LOGIN_SUCCESS});
      })
      .catch((err) => {
        dispatch({type: LOGIN_ERROR, err});
      });
  };
};
