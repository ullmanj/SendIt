import HomeScreenNotOnSend from "./HomeScreenNotOnSend";
import HomeScreenOnSend from "./HomeScreenOnSend";
import { useEffect } from "react";

import { View, Text, SafeAreaView, Switch } from "react-native";
import { fonts } from "../themes/fonts";
import { colors } from "../themes/colors";
import PreviousSends from "../utils/PreviousSends";


export default function HomeScreen({navigation, currentSend, setCurrentSend}) {
    return(
        <View style={{flex: 1,}}>
            { currentSend !== null && <HomeScreenOnSend currentSend={currentSend} setCurrentSend={setCurrentSend}/>  }
            { currentSend === null && <HomeScreenNotOnSend /> }
        </View>
    );
}