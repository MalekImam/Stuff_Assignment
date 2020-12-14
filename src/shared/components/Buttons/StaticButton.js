// Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet} from 'react-native';
// Paper Ui
import {Button, Colors} from 'react-native-paper';
function StaticButton({label, className, customStyle, ...rest}) {
  const combinedStyles = StyleSheet.compose(
    staticButtonStyles.container,
    className,
  );
  const contentStyle = StyleSheet.compose(
    staticButtonStyles.content,
    customStyle,
  );
  return (
    <Button
      {...rest}
      style={combinedStyles}
      contentStyle={contentStyle}
      icon="arrow-right">
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
  className: PropTypes.object,
  customStyle: PropTypes.object,
  label: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

StaticButton.defaultProps = {
  mode: 'contained', // Contained, Outlined, Text
  color: Colors.amber300,
};

export default StaticButton;
