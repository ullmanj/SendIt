// Circle Icon component for when the text/title is on top of the icon (like on the Select Interests screen)

import { View, StyleSheet, Text, Image, Dimensions } from "react-native";
import React, { useState } from 'react';
import { fonts } from '../themes/fonts'
import { colors } from '../themes/colors'
import { constants } from "../themes/constants";
import GreenButton from "./GreenButton";

export default function MapActivityPreview({ activity }) {
    console.log(activity);
    return(
        <View style={styles.body}>
            <SendInfo activity={activity}/>
            {/* <GreenButton/> */}
        </View>
    );
}

function Details({ activity }) {
    return(
        <View styles={styles.detailsChunk}>
            {/* <Text> {activity.hours}</Text> */}
            {/* <Text> {activity.name} </Text> */}
            {/* <Text> {activity.activityDurationHours} </Text> */}
            {/* <Text> {activity.price} </Text>   */}
        </View>
    );
}

function SendInfo({ activity }) {
    return(
        <View style={styles.sendInfo}>
            <Image source={activity.image} style={styles.image}/>
            <Details activity={activity}/>
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
    body: {
        width: Dimensions.get('window').width * 0.85,
        height: Dimensions.get('window').width * 0.30,
        backgroundColor: colors.white,
        borderRadius: constants.borderRadius,
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        padding: 10
    },
    sendInfo: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
        flex: 1,
    },
    detailsChunk: {

    },
    image: {
        width: undefined,
        aspectRatio: 1,
        height: '100%',
        resizeMode: 'cover',  // clipped instead of distorted
        borderRadius: constants.borderRadius,
    },
    circle: {
        borderRadius: 100,
        marginHorizontal: Dimensions.get('window').width * 0.041,
        width: Dimensions.get('window').width * 0.25,
        height: Dimensions.get('window').width * 0.25,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#171717',
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.8,
        shadowRadius: 4,
        marginVertical: 10
    } 
  });