import {Dimensions} from 'react-native';
import {Colors} from 'react-native-paper';

const mainBackgroundColor = Colors.lightBlue300;
const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

var Globals = {screenWidth, screenHeight, mainBackgroundColor};

export default Globals;
