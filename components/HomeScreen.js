import HomeScreenNotOnSend from "./HomeScreenNotOnSend";
import HomeScreenOnSend from "./HomeScreenOnSend";
import { useState } from "react";

import { View, Text, SafeAreaView, Switch } from "react-native";
import { fonts } from "../themes/fonts";
import { colors } from "../themes/colors";


export default function HomeScreen({navigation}) {
    const [isOnSend, setIsOnSend] = useState(false);
    return(
        <View style={{flex: 1,}}>
            { isOnSend && <HomeScreenOnSend/>  }
            { !isOnSend && <HomeScreenNotOnSend/> }
            
            <SafeAreaView style={{position: 'absolute', top: 30, right: 10, zIndex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                {/* <Text style={{fontSize: fonts.smallFontSize}}>On a Send:  </Text> */}
                <Switch
                    trackColor={{ false: colors.lightgray, true: colors.lightgreen }}
                    thumbColor={'white'}
                    onValueChange={() => setIsOnSend(previous => !previous)}
                    value={isOnSend}
                />
            </SafeAreaView>
        </View>
    );
}