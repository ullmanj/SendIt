import { StyleSheet, TouchableOpacity, Image, Text, Dimensions } from "react-native";
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
        <TouchableOpacity activeOpacity={.7} style={{marginBottom: 10}}onPress={()=>{changeBorderColor()}}>
            <Image style={styles(borderColor).circle} source={props.image}/>
            <Text style={styles(borderColor).title}>{props.title}</Text>
        </TouchableOpacity>
    );
}

const styles = (borderColor) => StyleSheet.create({
    title: {
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
        fontSize: fonts.circleIconTextFontSize
    },
    circle: {
        borderRadius: 100,
        marginLeft: 20,
        marginRight: 20,
        width: Dimensions.get('window').width * 0.2,
        height: Dimensions.get('window').width * 0.2,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: borderColor ? colors.darkgreen : "white",
        borderWidth: 5
    },
  });