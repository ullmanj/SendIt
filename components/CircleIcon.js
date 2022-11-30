// Circle Icon component for when the text/title is on top of the icon (like on the Select Interests screen)

import { StyleSheet, TouchableOpacity, ImageBackground, Text, Dimensions } from "react-native";
import React, { useState } from 'react';
import { fonts } from '../themes/fonts'
import { colors } from '../themes/colors'

export default function CircleIcon(props) {
    const [borderColor, setBorderColor] = useState(false)

    function changeBorderColor() {
        if (borderColor == true) {
            setBorderColor(false)
        } else {
            setBorderColor(true)
        }
    }
    return(
        <TouchableOpacity activeOpacity={.7} onPress={()=>{changeBorderColor()}}>
            <ImageBackground 
                source={props.image} 
                resizeMode="cover" 
                style={styles.circle}
                imageStyle={{ 
                    elevation: 10, // adds shadows for android
                    borderRadius: 100, 
                    borderColor: colors.darkgreen, 
                    borderWidth: borderColor ? 5 : 0 
                }}
                >
                <Text style={styles.title}>{props.title}</Text>
            </ImageBackground>
        </TouchableOpacity>

    );
}

const styles = StyleSheet.create({
    title: {
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
        fontSize: fonts.circleIconTextFontSize,
        color: 'black',
        backgroundColor: "#FFFFFFd0",
        borderRadius: 10,
        overflow:'hidden',
        paddingHorizontal: 5,
        paddingVertical: 2,
        fontWeight: 'bold'
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