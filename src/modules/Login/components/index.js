// Dependencies
import PropTypes from 'prop-types';
import React, {useReducer, useState} from 'react';
import {Text, View, TouchableWithoutFeedback, Keyboard} from 'react-native';
// Core Files
import loginReducer, {
  initialLoginState,
} from 'modules/Login/helpers/reducers/loginReducer';
import onSubmit from 'modules/Login/helpers/loginSubmit';
import ComponentControl from 'core/components/ComponentsControl';
import {dismissKeyboard} from 'core/helpers/KeyboardFunctioalities';
import {validateLoginInput} from 'modules/Login/helpers/loginValidation';
import {setEmail, setPassword} from 'modules/Login/helpers/actions/login';
// Shared Components
import loginStyles from 'modules/Login/styles';
import Avatar from 'shared/components/Avatars';
import ButtonWithIcon from 'shared/components/Buttons/ButtonWithIcon';

function Login({navigation}) {
  const [loginState, dispatch] = useReducer(loginReducer, initialLoginState);

  // Remove navigation header from the screen
  React.useLayoutEffect(() => {
    navigation.setOptions({headerShown: false});
  }, [navigation]);

  console.log(loginState);
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
            <ComponentControl
              label="Email"
              control="email"
              value={loginState.email}
              error={!loginState.isValid_email}
              onChangeText={(text) => dispatch(setEmail(text))}
              onBlur={() =>
                validateLoginInput('email', dispatch, loginState.email)
              }
            />
            <ComponentControl
              label="Password"
              control="password"
              value={loginState.password}
              error={!loginState.isValid_password}
              onChangeText={(text) => dispatch(setPassword(text))}
              onBlur={() =>
                validateLoginInput('password', dispatch, loginState.password)
              }
            />
            <ButtonWithIcon label="Next" onPress={() => onSubmit()} />
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
