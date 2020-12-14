// Dependencies
import React from 'react';
import {enableScreens} from 'react-native-screens';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
// Core Files
import useSelect from 'core/hooks/useSelect';
import {authRoutesList} from 'core/Routes/router';
import {unAuthRoutesList} from 'core/Routes/router';

enableScreens();
const Stack = createStackNavigator();

const App = () => {
  const user = useSelect('userReducer.user');

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {user
          ? authRoutesList.map((route, index) => {
              return (
                <Stack.Screen
                  key={index}
                  name={route.name}
                  component={route.component}
                />
              );
            })
          : unAuthRoutesList.map((route, index) => {
              return (
                <Stack.Screen
                  key={index}
                  name={route.name}
                  component={route.component}
                />
              );
            })}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
