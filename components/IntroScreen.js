import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { View, Image, Dimensions } from "react-native";
import { TouchableOpacity } from 'react-native';

export default function IntroScreen() {
    const navigation = useNavigation();

    // WORKING CODE for loading on a timer
    /*useEffect(() => {
    const intervalId = setInterval(() => {
        navigation.navigate('UpdateInterestsScreen');
    }, 5000)
    
    return () => clearInterval(intervalId)
    }, [])*/
     
    return(
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate('UpdateInterestsScreen')}>
                <Image style={{width: Dimensions.get('screen').width, height: Dimensions.get('screen').height}}source={require('../utils/miscPics/introScreen.png')}/>
            </TouchableOpacity>
        </View>
    );
}
