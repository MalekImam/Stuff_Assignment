import {createStore, combineReducers} from 'redux';
import userReducer from 'core/redux/reducers/userReducer';
import momentReducer from 'core/redux/reducers/momentReducer';

const rootReducers = combineReducers({userReducer, momentReducer});

const configureStore = () => createStore(rootReducers);

export default configureStore;
