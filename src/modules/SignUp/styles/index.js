// Dependencies
import {StyleSheet} from 'react-native';

const signUpStyles = StyleSheet.create({
  title: {fontSize: 25},
  avatar: {flex: 2, marginVertical: 45},
  titleContainer: {flex: 1, marginVertical: 40, alignContent: 'center'},
  inputsContainer: {flex: 5, alignSelf: 'stretch', paddingVertical: 30},
  nextBtn: {
    flex: 1,
    marginBottom: 15,
    alignSelf: 'stretch',
    justifyContent: 'flex-end',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  box: {
    flex: 9,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
  },
});

export default signUpStyles;
