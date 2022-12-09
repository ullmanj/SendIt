// Circle Icon component for when the text/title is on top of the icon (like on the Select Interests screen)

import { StyleSheet, Image, View, Text, Dimensions, SafeAreaView, Pressable, TouchableOpacity } from "react-native";
import React, { useState } from 'react';
import { fonts } from '../themes/fonts'
import { colors } from '../themes/colors'
import { shapes } from '../themes/shapes'
import CircleIcon from "./CircleIcon"
import BackButtonNoAction from "./BackButtonNoAction";
import HomeButtonNoAction from './HomeButtonNoAction';
import HomeBackArrowButtonNoAction from "./HomeBackArrowButtonNoAction";
import { constants } from "../themes/constants";

export default function ChatHeader(props) {
    const { navigation, activity, backScreen, backStack, goBackInStack } = props
    return(
        <SafeAreaView style={styles.container}>
            <TouchableOpacity style={[constants.backButtonStyle, {zIndex: 1}]} onPress={() => {
                if(goBackInStack) {
                    navigation.goBack()
                } else {
                    navigation.navigate(backStack, { 'screen': backScreen });
                }
            }}>
                {backStack !== 'HomeStack' && <BackButtonNoAction position="relative"/>}
                {backStack === 'HomeStack' && <HomeBackArrowButtonNoAction position="relative"/>}
            </TouchableOpacity>
            
            <View style={styles.centerText}>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Image source={activity.image} style={{...shapes.circle, width: Dimensions.get('window').width * .17, height: Dimensions.get('window').width * .17}} />
                    <Text style={{fontSize: fonts.chatHeaderFontSize, fontWeight: 'bold', marginVertical: 3}}>{activity.name}</Text>
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
        position: 'absolute',
        backgroundColor: '#FFFFFF',
        top: 0,
        left: 0,
        alignItems: 'space-between',
    },
    centerText: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        marginBottom: 5,
    }
  });