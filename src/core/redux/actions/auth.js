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

export const signUp = (userData) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    const firebase = getFirebase();
    const firestore = getFirestore();

    firebase
      .auth()
      .createUserWithEmailAndPassword(userData.email, userData.password)
      .then((res) => {
        return firestore
          .collection('users')
          .doc(res.user.uid)
          .set({
            email: userData.email,
            name: userData.name, // here i have to add field in the form for the name to match this field
          })
          .then(() => {
            dispatch({type: SIGN_UP_SUCCESS});
          });
      })
      .catch((err) => {
        dispatch({type: SIGN_UP_ERROR, err});
      });
  };
};
