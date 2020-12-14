// Dependencies
import PropTypes from 'prop-types';
import React, {useReducer} from 'react';
import {Text, View, TouchableWithoutFeedback, Keyboard} from 'react-native';
// Core Files
import loginReducer, {
  initialLoginState,
} from 'modules/Login/helpers/reducers/loginReducer';
import {dismissKeyboard} from 'core/helpers/KeyboardFunctioalities';
import {validateLoginInput} from 'modules/Login/helpers/validation';
import {setEmail, setPassword} from 'modules/Login/helpers/actions/login';
// Shared Components
import loginStyles from 'modules/Login/styles';
import Avatar from 'shared/components/Avatars';
import Input from 'shared/components/Input/index';

function Login({navigation}) {
  const [loginState, dispatch] = useReducer(loginReducer, initialLoginState);

  // Remove navigation header from the screen
  React.useLayoutEffect(() => {
    navigation.setOptions({headerShown: false});
  }, [navigation]);

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
            <Input
              label="Email"
              value={loginState.email}
              onBlur={() => validateLoginInput('email')}
              onChangeText={(text) => dispatch(setEmail(text))}
            />
            <Input
              label="Password"
              value={loginState.password}
              onBlur={() => validateLoginInput('password')}
              onChangeText={(text) => dispatch(setPassword(text))}
            />
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
