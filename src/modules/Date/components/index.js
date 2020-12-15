// Dependencies
import React from 'react';
import {View} from 'react-native';
import PropTypes from 'prop-types';
// Shared Components
import NavBar from 'shared/layouts/NavBar';
import dateStyles from 'modules/Date/styles';

function Date({navigation}) {
  const navBarTitle = {name: 'Custom date', styles: {color: 'black'}};

  // Remove navigation header from the screen
  React.useLayoutEffect(() => {
    navigation.setOptions({headerShown: false});
  }, [navigation]);

  return (
    <View style={dateStyles.container}>
      <NavBar backBtn navBarTitle={navBarTitle} />
      <View style={dateStyles.body}></View>
    </View>
  );
}

Date.propTypes = {navigation: PropTypes.object.isRequired};

export default Date;
