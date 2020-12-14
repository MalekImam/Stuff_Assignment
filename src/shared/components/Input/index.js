// Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, TextInput} from 'react-native';

function Input({styles, label, ...rest}) {
  const combinedStyles = StyleSheet.compose(defaultEmailStyles.email, styles);

  return <TextInput {...rest} placeholder={label} style={combinedStyles} />;
}

const defaultEmailStyles = StyleSheet.create({
  email: {alignSelf: 'stretch', marginVertical: 20},
});

Input.propTypes = {
  styles: PropTypes.object,
  label: PropTypes.string.isRequired,
};

Input.defaultProps = {
  styles: {},
};

export default Input;
