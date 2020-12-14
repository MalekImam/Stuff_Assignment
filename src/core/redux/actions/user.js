import {LOGIN, LOGOUT} from 'core/redux/actions/types';

export const logUserOut = () => ({type: LOGOUT});

export const logUserIn = (userData) => ({type: LOGIN, data: userData});
