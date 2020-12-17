// Dependencies
import thunk from 'redux-thunk';
import {reactReduxFirebase, getFirebase} from 'react-redux-firebase';
import fbConfig from 'core/config/firebaseConfig';
import userReducer from 'core/redux/reducers/userReducer';
import {reduxFirestore, getFirestore} from 'redux-firestore';
import momentReducer from 'core/redux/reducers/momentReducer';
import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
const rootReducers = combineReducers({userReducer, momentReducer});

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
