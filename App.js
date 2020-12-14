// Dependencies
import React from 'react';
import {enableScreens} from 'react-native-screens';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
// Core Files
import {authRoutesList} from 'core/Routes/router';
import {unAuthRoutesList} from 'core/Routes/router';

enableScreens();
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator></Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
