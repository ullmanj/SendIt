import { StyleSheet, Text, View } from "react-native";
import React, { useState } from 'react';
import { colors } from "../themes/colors";
import { fonts } from '../themes/fonts'

export default function MoneySigns({moneySigns}) {
    const MAX_NUM_MONEYSIGNS = 3;
    let additionalSigns = "";
    for(let i = 0; i < MAX_NUM_MONEYSIGNS - moneySigns.length; i++) {
        additionalSigns += "$";
    }
    return(
        <View style={{flexDirection: 'row'}}>
            <Text style={styles.primarySign}>
                {moneySigns}
            </Text>
            <Text style={styles.secondarySign}>
                {additionalSigns}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    primarySign: {
        fontSize: fonts.smallFontSize,
        fontWeight: '600',
    },
    secondarySign: {
        fontSize: fonts.smallFontSize,
        fontWeight: '600',
        color: colors.darkgray,
    },
})