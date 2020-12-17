// Dependencies
import PropTypes from 'prop-types';
import React, {useReducer, useState} from 'react';
import {Text, View, TouchableWithoutFeedback} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
// Core Files
import signUpReducer, {
  initialSignUpState,
} from 'modules/SignUp/helpers/reducers/signUpReducer';
import ComponentControl from 'core/components/ComponentsControl';
import {dismissKeyboard} from 'core/helpers/KeyboardFunctioalities';
import {validateSignUpInput} from 'modules/SignUp/helpers/signUpValidation';
import {
  setREmail,
  setRPassword,
  setRC_Password,
} from 'modules/SignUp/helpers/actions/signUp';
// Shared Components
import Avatar from 'shared/components/Avatars';
import signUpStyles from 'modules/SignUp/styles';

function SignUp({navigation}) {
  const [signUpState, dispatch] = useReducer(signUpReducer, initialSignUpState);

  // Remove navigation header from the screen
  React.useLayoutEffect(() => {
    navigation.setOptions({headerShown: false});
  }, [navigation]);

  return (
    <KeyboardAwareScrollView style={{flex: 1}}>
      <TouchableWithoutFeedback onPress={dismissKeyboard}>
        <View style={signUpStyles.container}>
          <View style={signUpStyles.box}>
            <View style={signUpStyles.avatar}>
              <Avatar
                size={130}
                type="image"
                source={require('shared/assets/stuff_logo.png')}
              />
            </View>
            <View style={signUpStyles.titleContainer}>
              <Text style={signUpStyles.title}>Create A new user!!</Text>
            </View>
            <View style={signUpStyles.inputsContainer}>
              <ComponentControl
                control="email"
                label="Email Address"
                value={signUpState.email}
                error={!signUpState.isValid_email}
                onChangeText={(text) => dispatch(setREmail(text))}
                onBlur={() =>
                  validateSignUpInput('email', dispatch, signUpState.email)
                }
              />
              <ComponentControl
                label="Password"
                control="password"
                value={signUpState.password}
                error={!signUpState.isValid_password}
                onChangeText={(text) => dispatch(setRPassword(text))}
                onBlur={() =>
                  validateSignUpInput(
                    'password',
                    dispatch,
                    signUpState.password,
                  )
                }
              />
              <ComponentControl
                control="password"
                label="Confirm Password"
                value={signUpState.password}
                error={!signUpState.isValid_password}
                onChangeText={(text) => dispatch(setRC_Password(text))}
                onBlur={() =>
                  validateSignUpInput(
                    'c_password',
                    dispatch,
                    signUpState.c_password,
                  )
                }
              />
            </View>
            <View style={signUpStyles.nextBtn}>
              <ButtonWithIcon
                label="Register"
                onPress={() => console.log('Register')}
                disabled={
                  !signUpState.isValid_email ||
                  !signUpState.isValid_password ||
                  !signUpState.isValid_c_password
                }
              />
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAwareScrollView>
  );
}

SignUp.propTypes = {navigation: PropTypes.object.isRequired};

export default SignUp;
