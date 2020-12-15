// Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';
// Shared Components
import NavBar from 'shared/layouts/NavBar';
import timeStyles from 'modules/Time/styles';

function Time({navigation}) {
  const navBarTitle = {name: 'Custom time', styles: {color: 'black'}};

  // Remove navigation header from the screen
  React.useLayoutEffect(() => {
    navigation.setOptions({headerShown: false});
  }, [navigation]);

  return (
    <View style={timeStyles.container}>
      <NavBar backBtn navBarTitle={navBarTitle} />
      <View style={timeStyles.body}></View>
    </View>
  );
}

Time.propTypes = {navigation: PropTypes.object.isRequired};

export default Time;
