// Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet} from 'react-native';
// Paper Ui
import {Button, Colors} from 'react-native-paper';
function StaticButton({label, buttonStyle, _btnContentStyle, ...rest}) {
  const combinedStyles = StyleSheet.compose(
    staticButtonStyles.container,
    buttonStyle,
  );
  const contentStyle = StyleSheet.compose(
    staticButtonStyles.content,
    _btnContentStyle,
  );
  return (
    <Button {...rest} style={combinedStyles} contentStyle={contentStyle}>
      {label}
    </Button>
  );
}

const staticButtonStyles = StyleSheet.create({
  content: {height: 60},
  container: {justifyContent: 'center'},
});

StaticButton.propTypes = {
  mode: PropTypes.string,
  icon: PropTypes.string,
  loading: PropTypes.bool,
  color: PropTypes.string,
  disabled: PropTypes.bool,
  uppercase: PropTypes.bool,
  buttonStyle: PropTypes.object,
  _btnContentStyle: PropTypes.object,
  label: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

StaticButton.defaultProps = {
  mode: 'contained', // Contained, Outlined, Text
  color: Colors.lightBlue300,
};

export default StaticButton;
