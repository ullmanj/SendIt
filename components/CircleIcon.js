// Circle Icon component for when the text/title is on top of the icon (like on the Select Interests screen)

import { StyleSheet, TouchableOpacity, ImageBackground, Text, Dimensions } from "react-native";
import React, { useState } from 'react';
import { fonts } from '../themes/fonts'
import { colors } from '../themes/colors'
import { shapes } from '../themes/shapes'

export default function CircleIcon({ image, title, widthFactor=0.22, heightFactor=0.22, preselected=false }) {
    const [borderColor, setBorderColor] = useState(() => {
        if (preselected) {
            return true;
        } return false;
    })

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
                source={image} 
                resizeMode="cover" 
                style={{...shapes.circle, width: Dimensions.get('window').width * widthFactor, height: Dimensions.get('window').width * heightFactor}}
                imageStyle={{ 
                    elevation: 10, // adds shadows for android
                    borderRadius: 100, 
                    borderColor: colors.lightpink, 
                    borderWidth: borderColor ? 5 : 0 
                }}
                >
                <Text style={{...fonts.iconText, fontWeight: 'bold'}}>{title}</Text>
            </ImageBackground>
        </TouchableOpacity>

    );
}
