// Circle Icon component for when the text/title is below the icon (like on the GroupSend screen)
import { StyleSheet, View, TouchableOpacity, Image, Text, Dimensions } from "react-native";
import React, { useState } from 'react';
import { fonts } from '../themes/fonts'
import { colors } from '../themes/colors'
import { shapes } from '../themes/shapes'

export default function CircleIconTextBelow({ pressHandler, showBorderColor=true, image, title }) {
    const [borderColor, setBorderColor] = useState(false)

    function changeBorderColor() {
        if (!showBorderColor) return; // no need to change border color state variable if prop is false
        if (borderColor == true) {
            setBorderColor(false)
        } else {
            setBorderColor(true)
        }
    }
    return(
        <TouchableOpacity activeOpacity={.7} onPress={()=>{
            changeBorderColor();
            pressHandler();
            }}>
            <View style={{
                // elevation: 10, // for android
                // shadowColor: '#171717',
                // shadowOffset: { width: 0, height: 0},
                // shadowOpacity: 0.6,
                // shadowRadius: 4
            }}
            >
                <Image 
                    source={image} 
                    resizeMode="cover" 
                    style={{...shapes.circle, borderWidth: borderColor ? 5 : 0 }}
                />
            </View>
            <Text style={styles.title}>{title}</Text>
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
        overflow:'hidden',
        paddingHorizontal: 5,
        paddingVertical: 2,
        fontWeight: '400',
        width: Dimensions.get('screen').width * 0.3, // this is because long titles mess with the formatting...
    },
  });