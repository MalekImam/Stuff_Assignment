// Dependencies
import {StyleSheet} from 'react-native';
// Core Files
import Globals from 'core/globals';
// Paper Ui
import {Colors} from 'react-native-paper';

const homeStyles = StyleSheet.create({
  body: {margin: 30},
  btnsContentStyle: {backgroundColor: 'white'},
  bodyText: {fontSize: 20, color: Colors.white},
  btnsStyle: {marginHorizontal: 40, borderRadius: 50, width: 100},
  container: {flex: 1, backgroundColor: Globals.mainBackgroundColor},
  bodyBtns: {flexDirection: 'row', marginTop: 50, justifyContent: 'center'},
});

export default homeStyles;
