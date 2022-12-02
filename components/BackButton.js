import { StyleSheet, Image } from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';  // this import fixes bugs


export default function BackButton(props) {
    return(
        <TouchableOpacity onPress={() => {
            props.navigation.navigate('GroupSendScreen')
        }}>
            <Image style={{width: 40, height: 40}}source={require('../utils/miscPics/backButton.png')} />
        </TouchableOpacity>

    );
}
