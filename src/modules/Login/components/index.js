// Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import {Text, View} from 'react-native';
// Shared Components
import loginStyles from 'modules/Login/styles';
import Avatar from 'shared/components/Avatars';

function Login({navigation}) {
  // Remove navigation header from the screen
  React.useLayoutEffect(() => {
    navigation.setOptions({headerShown: false});
  }, [navigation]);

  return (
    <View style={loginStyles.container}>
      <View>
        <Avatar
          size={130}
          type="image"
          source={require('shared/assets/stuff_logo.png')}
        />
      </View>
      <View style={loginStyles.titleContainer}>
        <Text style={loginStyles.title}>Your email address and password?</Text>
      </View>
    </View>
  );
}

Login.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default Login;
