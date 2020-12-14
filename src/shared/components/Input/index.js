// Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, TextInput} from 'react-native';
// Paper Ui
import {HelperText} from 'react-native-paper';

function Input({styles, label, error, ...rest}) {
  const combinedStyles = StyleSheet.compose(defaultEmailStyles.email, styles);

  return (
    <>
      <TextInput {...rest} placeholder={label} style={combinedStyles} />
      <HelperText type="error" visible={error}>
        {'Incorrect!!!'}
      </HelperText>
    </>
  );
}

const defaultEmailStyles = StyleSheet.create({
  email: {alignSelf: 'stretch', marginTop: 20},
});

Input.propTypes = {
  error: PropTypes.bool,
  onBlur: PropTypes.func,
  styles: PropTypes.object,
  onChangeText: PropTypes.func,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

Input.defaultProps = {
  styles: {},
  error: false,
};

export default Input;
