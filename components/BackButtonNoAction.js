import { Image } from "react-native";


export default function BackButton() {
    return(
        <Image style={{width: 40, height: 40}}source={require('../utils/miscPics/backButton.png')} />
    );
}
