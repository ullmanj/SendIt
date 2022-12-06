import HomeScreenNotOnSend from "./HomeScreenNotOnSend";
import HomeScreenOnSend from "./HomeScreenOnSend";
import { useState } from "react";

import { View, Text, SafeAreaView, Switch } from "react-native";
import { fonts } from "../themes/fonts";
import { colors } from "../themes/colors";
import PreviousSends from "../utils/PreviousSends";


export default function HomeScreen({navigation, currentSend, setCurrentSend}) {
    // setCurrentSend(PreviousSends[0])

    return(
        <View style={{flex: 1,}}>
            { currentSend !== null && <HomeScreenOnSend currentSend={currentSend} setCurrentSend={setCurrentSend}/>  }
            { currentSend === null && <HomeScreenNotOnSend /> }
            
            <SafeAreaView style={{position: 'absolute', top: 30, right: 10, zIndex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                {/* <Text style={{fontSize: fonts.smallFontSize}}>On a Send:  </Text> */}
                {/* <Switch
                    trackColor={{ false: colors.lightgray, true: colors.lightgreen }}
                    thumbColor={'white'}
                    onValueChange={() => setCurrentSend(() => {currentSend === null ? PreviousSends[0] : null})}
                    value={currentSend !== null}
                /> */}
            </SafeAreaView>
        </View>
    );
}