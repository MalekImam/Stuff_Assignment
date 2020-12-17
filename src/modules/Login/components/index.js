// Dependencies
import PropTypes from 'prop-types';
import {useDispatch} from 'react-redux';
import React, {useReducer, useState} from 'react';
import {Text, View, TouchableWithoutFeedback} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
// Core Files
import useSelect from 'core/hooks/useSelect';
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
import MessageBox from 'shared/components/MessageBox';
import ButtonWithIcon from 'shared/components/Buttons/ButtonWithIcon';

function Login({navigation}) {
  const dispatchAuth = useDispatch();
  const authError = useSelect('authReducer.authError');
  const [loginState, dispatch] = useReducer(loginReducer, initialLoginState);

  // Remove navigation header from the screen
  React.useLayoutEffect(() => {
    navigation.setOptions({headerShown: false});
  }, [navigation]);

  return (
    <KeyboardAwareScrollView style={{flex: 1}}>
      <TouchableWithoutFeedback onPress={dismissKeyboard}>
        <View style={loginStyles.container}>
          <View style={loginStyles.box}>
            <View style={loginStyles.avatar}>
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
                label="Email Address"
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
              {authError && <MessageBox message={authError} />}
            </View>
            <View style={loginStyles.nextBtn}>
              {loginState.email || loginState.password ? (
                <ButtonWithIcon
                  label="Next"
                  onPress={() => onSubmit(loginState, dispatchAuth)}
                  disabled={
                    !loginState.isValid_email || !loginState.isValid_password
                  }
                />
              ) : null}
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAwareScrollView>
  );
}

Login.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default Login;
