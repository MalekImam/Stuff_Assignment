// Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
// Paper Ui
import {Colors, IconButton} from 'react-native-paper';

function NavBar({backBtn, rightBtns, leftBtns, title}) {
  const navigation = useNavigation();

  const goBack = () => navigation.goBack();
  const BackBtn = <IconButton icon="arrow-left" onPress={() => goBack()} />;

  return (
    <View style={navBarStyles.container}>
      {/* Left Area */}
      <View style={navBarStyles.left}>
        {leftBtns.length > 0
          ? leftBtns.map((btn) => <IconButton icon={btn.icon} {...btn.props} />)
          : backBtn
          ? BackBtn
          : null}
      </View>
      {/* Middle Area */}
      <View style={navBarStyles.center}>
        <Text style={navBarStyles.title}>{title || ''}</Text>
      </View>
      {/* Right Area */}
      <View style={navBarStyles.right}>
        {rightBtns.map((btn) => (
          <IconButton icon={btn.icon} {...btn.props} />
        ))}
      </View>
    </View>
  );
}

const navBarStyles = StyleSheet.create({
  right: {flex: 1, alignItems: 'flex-end'},
  left: {flex: 1, alignItems: 'flex-start'},
  title: {fontSize: 22, color: Colors.white},
  container: {flexDirection: 'row', height: 45},
  center: {flex: 1, alignItems: 'center', justifyContent: 'center'},
});

NavBar.propTypes = {
  backBtn: PropTypes.bool,
  leftBtns: PropTypes.array,
  rightBtns: PropTypes.array,
};

NavBar.defaultProps = {
  leftBtns: [],
  rightBtns: [],
  backBtn: false,
};

export default NavBar;
