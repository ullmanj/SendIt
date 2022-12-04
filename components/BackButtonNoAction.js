import { Image } from "react-native";


export default function BackButton({position='absolute'}) {
    return(
        <Image style={{width: 40, height: 40, position: {position}}} source={require('../utils/miscPics/backButton.png')} />
    );
}
