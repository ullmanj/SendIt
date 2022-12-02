import { StyleSheet, TouchableOpacity, Image } from "react-native";


export default function BackButton(props) {
    return(
        <TouchableOpacity onPress={() => {
            props.navigation.navigate('GroupSendScreen')
        }}>
            <Image style={{width: 40, height: 40}}source={require('../utils/miscPics/backButton.png')} />
        </TouchableOpacity>

    );
}
