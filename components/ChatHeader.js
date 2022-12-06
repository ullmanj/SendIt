// Circle Icon component for when the text/title is on top of the icon (like on the Select Interests screen)

import { StyleSheet, Image, View, Text, Dimensions, SafeAreaView, Pressable } from "react-native";
import React, { useState } from 'react';
import { fonts } from '../themes/fonts'
import { colors } from '../themes/colors'
import { shapes } from '../themes/shapes'
import CircleIcon from "./CircleIcon"
import BackButtonNoAction from "./BackButtonNoAction"
import { constants } from "../themes/constants";

export default function ChatHeader(props) {
    const { navigation, activity, backScreen } = props
    return(
        <SafeAreaView style={styles.container}>
            <Pressable style={constants.backButtonStyle} onPress={() => {navigation.goBack()}}> 
                <BackButtonNoAction position="relative"/>
            </Pressable>
            <View style={styles.centerText}>
                <Image source={activity.image} style={{...shapes.circle, width: Dimensions.get('window').width * .17, height: Dimensions.get('window').width * .17}} />
                <View style={{justifyContent: 'center'}}>
                    <Text style={{fontSize: fonts.chatHeaderFontSize, fontWeight: '600', marginBottom: 3}}>{activity.name}</Text>
                    <Text style={{fontSize: fonts.chatSubheaderFontSize, color: colors.darkgray}}>5/7 votes</Text> 
                </View>
            </View>
        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    container: {
        borderBottomColor: colors.lightgray,
        borderBottomWidth: 2,
        width: Dimensions.get('screen').width,
    },
    centerText: {
        flexDirection: 'row', 
        marginLeft: Dimensions.get('window').width * .17, 
        marginBottom: 10
    }
  });