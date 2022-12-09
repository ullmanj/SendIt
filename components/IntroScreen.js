import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { View, Image, Dimensions } from "react-native";
import { TouchableOpacity } from 'react-native';

export default function IntroScreen() {
    const navigation = useNavigation();

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('UpdateInterestsScreen');
        }, 3000)
    }, [])
     
    return(
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            {/* <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate('UpdateInterestsScreen')}> */}
                <Image style={{width: Dimensions.get('screen').width, height: Dimensions.get('screen').height}}source={require('../utils/miscPics/introScreen.png')}/>
            {/* </TouchableOpacity> */}
        </View>
    );
}
