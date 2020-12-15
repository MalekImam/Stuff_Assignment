// Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import {Text, View} from 'react-native';
// Shared Components
import NavBar from 'shared/layouts/NavBar';
import homeStyles from 'modules/Home/styles';
import BodyButton from 'modules/Home/components/BodyButton';

function Home({navigation}) {
  const LogOutBtn = {
    icon: 'power',
    props: {
      onPress: () => console.log('Loggggg Outttttt'),
    },
  };
  const rightBtns = [LogOutBtn];

  // Remove navigation header from the screen
  React.useLayoutEffect(() => {
    navigation.setOptions({headerShown: false});
  }, [navigation]);

  return (
    <View style={homeStyles.container}>
      <NavBar rightBtns={rightBtns} />
      <View style={homeStyles.body}>
        <Text style={homeStyles.bodyText}>
          I'd like to book a meeting with the business development at/on ...
        </Text>
        <View style={homeStyles.bodyBtns}>
          <BodyButton label="Date" />
          <BodyButton label="Time" />
        </View>
      </View>
    </View>
  );
}

Home.propTypes = {navigation: PropTypes.object.isRequired};

export default Home;
