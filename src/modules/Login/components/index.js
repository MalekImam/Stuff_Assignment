// Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import {Text, View} from 'react-native';
import Avatar from 'shared/components/Avatars';

function Login({navigation}) {
  // Remove navigation header from the screen
  React.useLayoutEffect(() => {
    navigation.setOptions({headerShown: false});
  }, [navigation]);

  return (
    <View>
      <Avatar
        size={130}
        type="image"
        source={require('shared/assets/stuff_logo.png')}
      />
    </View>
  );
}

Login.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default Login;
