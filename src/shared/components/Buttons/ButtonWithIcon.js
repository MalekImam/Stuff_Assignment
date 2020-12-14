// Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Colors} from 'react-native-paper';

function ButtonWithIcon({onPress, icon, label}) {
  return (
    <TouchableOpacity onPress={() => onPress()}>
      <View style={buttonStyles.container}>
        <View style={buttonStyles.textContainer}>
          <Text style={buttonStyles.text}>{label}</Text>
        </View>
        <View style={buttonStyles.icon}>
          <MaterialCommunityIcons size={35} name={icon} color={Colors.white} />
        </View>
      </View>
    </TouchableOpacity>
  );
}

const buttonStyles = StyleSheet.create({
  icon: {flex: 0.1, alignItems: 'flex-end'},
  text: {fontSize: 20, color: Colors.white, marginLeft: 40},
  container: {flexDirection: 'row', backgroundColor: Colors.black},
  textContainer: {flex: 1, alignItems: 'center', justifyContent: 'center'},
});

ButtonWithIcon.propTypes = {
  icon: PropTypes.string,
  label: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

ButtonWithIcon.defaultProps = {
  icon: 'arrow-right',
};

export default ButtonWithIcon;
