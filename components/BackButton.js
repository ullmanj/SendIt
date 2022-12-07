import { StyleSheet, Image, Dimensions } from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';  // this import fixes bugs


export default function BackButton({navigation, previousScreen}) {
    return(
        <TouchableOpacity onPress={() => {
            navigation.navigate(previousScreen)
        }}>
            <Image style={{width: Dimensions.get('screen').width * 0.13, height: Dimensions.get('screen').width * 0.13,}}source={require('../utils/miscPics/backButton.png')} />
        </TouchableOpacity>

    );
}
