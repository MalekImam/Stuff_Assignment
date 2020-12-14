// Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import {Text, View} from 'react-native';
// Shared Components
import NavBar from 'shared/layouts/NavBar';

function Login({navigation}) {
  // Remove navigation header from the screen
  React.useLayoutEffect(() => {
    navigation.setOptions({headerShown: false});
  }, [navigation]);

  return (
    <View>
      <Text>Login Page</Text>
    </View>
  );
}

Login.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default Login;
