import {
  LOGIN_ERROR,
  LOGOUT_ERROR,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
} from 'core/redux/actions/types';

export const logUserOut = () => {
  return (dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase();
    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({type: LOGOUT_SUCCESS});
      })
      .catch((err) => dispatch({type: LOGOUT_ERROR, err}));
  };
};

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
