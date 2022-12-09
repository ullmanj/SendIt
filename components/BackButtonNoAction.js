import { Image, Dimensions } from "react-native";


export default function BackButtonNoAction({position='absolute'}) {
    return(
        <Image style={{width: Dimensions.get('screen').width * 0.13, height: Dimensions.get('screen').width * 0.13, position: {position}}} source={require('../utils/miscPics/backButton.png')} />
    );
}
