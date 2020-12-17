// Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text, View} from 'react-native';
// Paper Ui
import {Colors} from 'react-native-paper';

function MessageBox({message, type}) {
  let backgroundColor;
  switch (type) {
    case 'success':
      backgroundColor = Colors.lightGreen400;
    case 'info':
      backgroundColor = Colors.lightBlue400;
    case 'warning':
      backgroundColor = Colors.orange300;
    default:
      backgroundColor = Colors.red400; // error
  }
  return (
    <View style={[MessageBoxStyles.container, {backgroundColor}]}>
      <Text style={MessageBoxStyles.message}>{message}</Text>
    </View>
  );
}

const MessageBoxStyles = StyleSheet.create({
  container: {margin: 20, padding: 5},
  message: {fontSize: 20},
});

MessageBox.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['error', 'success', 'info', 'warning']),
};

MessageBox.defaultProps = {type: 'error'};

export default MessageBox;
