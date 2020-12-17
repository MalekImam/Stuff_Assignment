// Dependencies
import thunk from 'redux-thunk';
import userReducer from 'core/redux/reducers/userReducer';
import momentReducer from 'core/redux/reducers/momentReducer';
import {createStore, combineReducers, applyMiddleware} from 'redux';

const rootReducers = combineReducers({userReducer, momentReducer});

const configureStore = () => createStore(rootReducers, applyMiddleware(thunk));

export default configureStore;
