// Circle Icon component for when the text/title is below the icon (like on the GroupSend screen)
import { StyleSheet, View, TouchableOpacity, Image, Text, Dimensions } from "react-native";
import React, { useState } from 'react';
import { fonts } from '../themes/fonts'
import { colors } from '../themes/colors'

export default function CircleIconTextBelow(props) {
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
            <View style={{
                elevation: 10, // for android
                shadowColor: '#171717',
                shadowOffset: { width: 0, height: 0},
                shadowOpacity: 0.8,
                shadowRadius: 4,}}
            >
                <Image 
                    source={props.image} 
                    resizeMode="cover" 
                    style={{...styles.circle, borderWidth: borderColor ? 5 : 0 }}
                />
            </View>
            <Text style={styles.title}>{props.title}</Text>
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
        marginBottom: 3,
        marginTop: 10,
        borderRadius: 100, 
        borderColor: colors.darkgreen, 
    } 
  });