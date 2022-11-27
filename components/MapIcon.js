import { StyleSheet, TouchableOpacity, Image, Text, Dimensions } from "react-native";
import React, { useState } from 'react';
import { fonts } from '../themes/fonts'
import { colors } from '../themes/colors'
import Icon from 'react-native-vector-icons/Ionicons';

export default function MapIcon(props) {
    return(
        <TouchableOpacity>
            <Text style={{fontSize: Dimensions.get('window').width * 0.07}}>{props.emoji}</Text>
            <Text style={styles.name}>{props.name}</Text>
        </TouchableOpacity>
        // TODO make it so that when you click on component, a popup appears at the bottom with more info and that allows you to vote
    );
}

const styles = StyleSheet.create({
    name: {
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
        fontSize: fonts.circleIconTextFontSize,
        width: 60
    },
    image: {
        borderRadius: 100,
        marginLeft: 20,
        marginRight: 20,
        width: Dimensions.get('window').width * 0.2,
        height: Dimensions.get('window').width * 0.2,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
        // borderColor: borderColor ? colors.darkgreen : "white",
        // borderWidth: 5
    },
  });