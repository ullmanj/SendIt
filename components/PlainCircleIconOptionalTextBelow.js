// Circle Icon component for when the text/title is below the icon (like on the GroupSend screen)
import { StyleSheet, View, TouchableOpacity, Image, Text, Dimensions } from "react-native";
import React, { useState } from 'react';
import { fonts } from '../themes/fonts'
import { colors } from '../themes/colors'
import { shapes } from '../themes/shapes'

export default function PlainCircleIconOptionalTextBelow({ image, subtitle=null, widthFactor=0.22, heightFactor=0.22 }) {
    return(
        <View style={styles.container}>
            <Image
                source={image} 
                resizeMode="cover" 
                style={{...shapes.circle, width: Dimensions.get('window').width * widthFactor, height: Dimensions.get('window').width * heightFactor}}
            />
            { subtitle !== null && <Text numberOfLines={1} style={styles.title}>{subtitle}</Text> }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: fonts.circleIconTextFontSize,
        color: 'black',
        // overflow:'hidden',
        paddingHorizontal: 5,
        paddingVertical: 2,
        fontWeight: '400',
    },
  });