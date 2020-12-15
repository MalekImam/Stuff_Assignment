/**
 * @format
 */

import App from './App';
import React from 'react';
import {Provider} from 'react-redux';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import configureStore from 'core/redux/store';

// Import modules routes
import 'modules/Login/routes';
import 'modules/Home/routes';
import 'modules/Date/routes';

const store = configureStore();

const Main = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => Main);
