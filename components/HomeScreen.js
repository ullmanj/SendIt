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
        </View>
    );
}