// Dependencies
import {StyleSheet} from 'react-native';
// Core Files
import Globals from 'core/globals';
// Paper Ui
import {Colors} from 'react-native-paper';

const homeStyles = StyleSheet.create({
  body: {margin: 30},
  bodyText: {fontSize: 20, color: Colors.white},
  container: {flex: 1, backgroundColor: Globals.mainBackgroundColor},
});

export default homeStyles;
