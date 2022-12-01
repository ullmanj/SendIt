// Circle Icon component for when the text/title is on top of the icon (like on the Select Interests screen)

import { View, StyleSheet, Text, Image, Dimensions } from "react-native";
import React, { useState, useCallback} from 'react';
import { fonts } from '../themes/fonts'
import { colors } from '../themes/colors'
import { constants } from "../themes/constants";
import GreenButton from "./GreenButton";
import SmallGreenButton from "./SmallGreenButton";
import { useNavigation } from "@react-navigation/native";

export default function MapActivityPreview({ activity }) {
    return(
        <View style={styles.body}>
            <Image source={activity.image} style={styles.image}/>
            <Details activity={activity}/>
        </View>
    );
}

function Details({ activity }) {
    const navigation = useNavigation();

    const [numLines, setNumLines] = useState(1);
    const onTextLayout = useCallback(e => {
        setNumLines(e.nativeEvent.lines.length);
    });
    return(
        <View style={styles.details}>
            <View style={styles.topRow}>
                <Text style={styles.hours}>{activity.hours}</Text>
                <Text style={styles.price}>{activity.price}</Text>
            </View>
            <Text style={styles.name} numberOfLines={2} onTextLayout={onTextLayout}>{activity.name}{numLines === 1 ? "\n" : ""}</Text>
            <View style={styles.buttonContainer}>
                <SmallGreenButton navigation={navigation} title={"Vote"} nextScreen={""}/>
            </View>
        </View>
    );
}

// function VoteButton() {
//     return(
//         <View>
//             <Text> Vote </Text>
//         </View>
//     );
// }

const styles = StyleSheet.create({
    // title: {
    //     alignItems: 'center',
    //     textAlign: 'center',
    //     justifyContent: 'center',
    //     fontSize: fonts.circleIconTextFontSize,
    //     color: 'black',
    //     backgroundColor: "#FFFFFFd0",
    //     borderRadius: 10,
    //     overflow:'hidden',
    //     paddingHorizontal: 5,
    //     paddingVertical: 2,
    //     fontWeight: 'bold'
    // },
    hours: {
        fontWeight: 'bold',
        color: colors.darkgreen,
        fontSize: fonts.smallFontSize,
    },
    name: {
        fontSize: fonts.subtitleFontSize,
        fontWeight: 'bold',
    },
    price: {
        fontSize: fonts.smallFontSize,
        fontWeight: 'bold',
    },
    topRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    details: {
        flex: 2,
        paddingHorizontal: 10,
        justifyContent: 'space-between',
    },
    buttonContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    body: {
        width: Dimensions.get('window').width * 0.85,
        // height: Dimensions.get('window').width * 0.30,
        height: undefined,
        backgroundColor: colors.white,
        borderRadius: constants.borderRadius,
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
        padding: 10,
    },
    image: {
        flex: 1,
        height: undefined,
        // aspectRatio: 1,
        width: undefined,
        // width: '25%',
        resizeMode: 'cover',  // clipped instead of distorted
        borderRadius: constants.borderRadius,
    },
  });