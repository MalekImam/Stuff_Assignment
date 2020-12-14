const {StyleSheet} = require('react-native');

const loginStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  title: {fontSize: 25},
  titleContainer: {marginVertical: 40},
  box: {alignItems: 'center', justifyContent: 'center'},
  inputsContainer: {alignSelf: 'stretch', paddingVertical: 80},
});

export default loginStyles;
