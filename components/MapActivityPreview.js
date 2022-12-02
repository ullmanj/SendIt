// Circle Icon component for when the text/title is on top of the icon (like on the Select Interests screen)

import { View, StyleSheet, Text, Image, Dimensions } from "react-native";
import React, { useState, useCallback} from 'react';
import { fonts } from '../themes/fonts'
import { colors } from '../themes/colors'
import { constants } from "../themes/constants";
import GreenButton from "./GreenButton";
import SmallGreenButton from "./SmallGreenButton";
import { useNavigation } from "@react-navigation/native";
import MoneySigns from "./MoneySigns";

export default function MapActivityPreview({ activity, voteHandler }) {
    return(
        <View style={styles.body}>
            <Image source={activity.image} style={styles.image}/>
            <Details activity={activity} voteHandler={voteHandler}/>
        </View>
    );
}

function Details({ activity, voteHandler }) {
    const navigation = useNavigation();

    const [numLines, setNumLines] = useState(1);
    const onTextLayout = useCallback(e => {
        setNumLines(e.nativeEvent.lines.length);
    });
    return(
        <View style={styles.details}>
            <View style={styles.topRow}>
                <Text style={styles.hours}>{activity.hours}</Text>
                <MoneySigns moneySigns={activity.price}/>
            </View>
            <Text style={styles.name} numberOfLines={2} onTextLayout={onTextLayout}>{activity.name}{numLines === 1 ? "\n" : ""}</Text>
            <View style={styles.buttonContainer}>
                <SmallGreenButton navigation={navigation} title={"Vote"} pressHandler={voteHandler}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    hours: {
        fontWeight: 'bold',
        color: colors.darkgreen,
        fontSize: fonts.smallFontSize,
    },
    name: {
        fontSize: fonts.subtitleFontSize,
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
        width: undefined,
        resizeMode: 'cover',  // clipped instead of distorted
        borderRadius: constants.borderRadius,
    },
  });