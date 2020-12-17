// Dependencies
import thunk from 'redux-thunk';
import fbConfig from 'core/config/firebaseConfig';
import authReducer from 'core/redux/reducers/authReducer';
import momentReducer from 'core/redux/reducers/momentReducer';
import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import {reduxFirestore, firestoreReducer, getFirestore} from 'redux-firestore';
import {
  getFirebase,
  firebaseReducer,
  reactReduxFirebase,
} from 'react-redux-firebase';

const rootReducers = combineReducers({
  authReducer,
  momentReducer,
  firebaseReducer,
  firestoreReducer,
});

const configureStore = () =>
  createStore(
    rootReducers,
    compose(
      applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
      reduxFirestore(fbConfig),
      reactReduxFirebase(fbConfig),
    ),
  );

export default configureStore;
