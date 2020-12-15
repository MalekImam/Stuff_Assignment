// Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import {Text, View} from 'react-native';
// Shared Components
import homeStyles from 'modules/Home/styles';

function Home({navigation}) {
  // Remove navigation header from the screen
  React.useLayoutEffect(() => {
    navigation.setOptions({headerShown: false});
  }, [navigation]);

  return (
    <View style={homeStyles.container}>
      <Text>Home Page</Text>
    </View>
  );
}

Home.propTypes = {navigation: PropTypes.object.isRequired};

export default Home;
