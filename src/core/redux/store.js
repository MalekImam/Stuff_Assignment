import {createStore, combineReducers} from 'redux';
import userReducer from 'core/redux/reducers/userReducer';

const rootReducers = combineReducers({userReducer});

const configureStore = () => createStore(rootReducers);

export default configureStore;
