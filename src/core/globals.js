import {Dimensions} from 'react-native';

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);
console.log(screenHeight, screenWidth);
var Globals = {screenWidth, screenHeight};

export default Globals;
