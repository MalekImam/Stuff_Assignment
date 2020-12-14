// Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import {Text, View} from 'react-native';

function Login({navigation}) {
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
