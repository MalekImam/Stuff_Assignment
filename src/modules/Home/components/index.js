// Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import {Text, View} from 'react-native';
// Shared Components
import homeStyles from 'modules/Home/styles';
import NavBar from '../../../shared/layouts/NavBar';

function Home({navigation}) {
  // Remove navigation header from the screen
  React.useLayoutEffect(() => {
    navigation.setOptions({headerShown: false});
  }, [navigation]);

  return (
    <View style={homeStyles.container}>
      <NavBar />
      <View style={homeStyles.body}>
        <Text style={homeStyles.bodyText}>
          I'd like to book a meeting with the business development at/on ...
        </Text>
      </View>
    </View>
  );
}

Home.propTypes = {navigation: PropTypes.object.isRequired};

export default Home;
