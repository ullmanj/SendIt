import { Image, Dimensions } from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';  // this import fixes bugs

// this isn't working yet. idk how to get it to show/where to add it
export default function IntroScreen({navigation}) {
    return(
        <Image style={{width: Dimensions.get('screen').width * 0.13, height: Dimensions.get('screen').width * 0.13,}}source={require('../utils/miscPics/introScreen.png')} />
    );
}
