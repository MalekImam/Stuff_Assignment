// Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import {Text, View, TouchableWithoutFeedback, Keyboard} from 'react-native';
// Shared Components
import loginStyles from 'modules/Login/styles';
import Avatar from 'shared/components/Avatars';
import Input from 'shared/components/Input/index';

function Login({navigation}) {
  // Remove navigation header from the screen
  React.useLayoutEffect(() => {
    navigation.setOptions({headerShown: false});
  }, [navigation]);

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <View style={loginStyles.container}>
        <View style={loginStyles.box}>
          <View>
            <Avatar
              size={130}
              type="image"
              source={require('shared/assets/stuff_logo.png')}
            />
          </View>
          <View style={loginStyles.titleContainer}>
            <Text style={loginStyles.title}>
              Your email address and password?
            </Text>
          </View>
          <View style={loginStyles.inputsContainer}>
            <Input label="Email" />
            <Input label="Email" />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

Login.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default Login;
